const {
  app,
  BrowserWindow,
  Menu
} = require('electron')
const path = require('path')

let mainWindow

function createWindow() {
  let isMac = process.platform === 'darwin' ? true : false;
  let menuTemplate = [
    ...(isMac ? [{
      label: 'iDesign Card',
      submenu: [{
          role: 'about',
          label: 'About iDesign Card'
        },
        {
          type: 'separator'
        },
        {
          role: 'services'
        },
        {
          type: 'separator'
        },
        {
          role: 'hide',
          label: 'Hide iDesign Card'
        },
        {
          role: 'hideothers'
        },
        {
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          role: 'quit',
          label: 'Quit iDesign Card'
        }
      ]
    }] : []),
    {
      label: 'Edit',
      submenu: [{
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        },
        ...(isMac ? [{
            role: 'pasteAndMatchStyle'
          },
          {
            role: 'delete'
          },
          {
            role: 'selectAll'
          },
          {
            type: 'separator'
          },
          {
            label: 'Speech',
            submenu: [{
                role: 'startspeaking'
              },
              {
                role: 'stopspeaking'
              }
            ]
          }
        ] : [{
            role: 'delete'
          },
          {
            type: 'separator'
          },
          {
            role: 'selectAll'
          }
        ])
      ]
    }
  ];

  let menu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(menu);

  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    maximizable: false,
    resizable: false,
    title: 'iDesign Card',
    titleBarStyle: 'hiddenInset',
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});