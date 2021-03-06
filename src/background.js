"use strict";

import { app, protocol, BrowserWindow, Menu, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.

  win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    useContentSize: true,
    frame: true, //Remove frame to hide default menu
    kiosk: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      //nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      nodeIntegration: true,
      webviewTag: true,
      webSecurity: true,
      defaultEncoding: "UTF-8",
      devTools: true,
      enableRemoteModule: true,
    },
  });
  win.setBackgroundColor("#000000");
  const isMac = process.platform === "darwin";
  var menu = Menu.buildFromTemplate([
    {
      label: "Total",
      click: function() {
        win.webContents.send("menu", "total");
      },
    },
    {
      label: "Text",
      click: function() {
        win.webContents.send("menu", "text");
      },
    },
    {
      label: "Image",
      click: function() {
        win.webContents.send("menu", "image");
      },
    },
    {
      label: "Video",
      click: function() {
        win.webContents.send("menu", "video");
      },
    },
    {
      label: "PPT",
      click: function() {
        win.webContents.send("menu", "ppt");
      },
    },
    {
      label: "App",
      click: function() {
        win.webContents.send("menu", "app");
      },
    },
    {
      label: "OS Info",
      click: function() {
        win.webContents.send("menu", "osinfo");
      },
    },
    {
      label: "Device I/O",
      click: function() {
        win.webContents.send("menu", "deviceio");
      },
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forcereload" },
        { role: "toggledevtools" },
        { type: "separator" },
        { role: "resetzoom" },
        { role: "zoomin" },
        { role: "zoomout" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "IPC Exit",
      click: function() {
        win.webContents.send("menu", "exit");
      },
    },
  ]);

  Menu.setApplicationMenu(menu);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });
}
app.allowRendererProcessReuse = false;
// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  customProtocol();
  createWindow();
  registerIPC();
});

function registerIPC() {
  ipcMain.on("ipc-exit", (event, arg) => {
    console.log("ipc-exit called"); // "ping" 출력
    console.log(win.closable);
    win.close();
    app.quit();
  });
}

//실질적으로 WEbsecurity Disable 하면 로컬파일을 읽어올 수 있지만 보안이 취약해짐으로 인해 커스텀 프로토콜을 생성후 그 프로토콜을 통해 로컬파일 을 불러오는 작업
function customProtocol() {
  const protocolName = "safe-file-protocol";

  protocol.registerFileProtocol(protocolName, (request, callback) => {
    const url = request.url.replace(`${protocolName}://`, "");
    try {
      return callback(decodeURIComponent(url));
    } catch (error) {
      // Handle the error as needed
      console.error(error);
    }
  });
}

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
