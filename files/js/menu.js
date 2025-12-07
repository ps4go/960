var menuData = {
  "主菜单": {
    "ID": "MainMenu",
    "class": "MenuClass",
    "style": "display:block",
    "payloads": [
      {
        "PL-Title": "菜单",
        "PL-Bin": "INFO",
        "PL-Ver": "菜单说明:",
        "PL-Desc": "支持PS4 7.00-9.60系统的折腾菜单。",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "GoldHEN一键折腾",
        "PL-Bin": "GoldHEN.bin",
        "PL-Ver": "By SiSTRo",
        "PL-Desc": "<b> * 按 R1 键更改版本 *<br> * 按 L1 键设置漏洞利用后自动加载开启/关闭 *</b><br>PS4 7.00-9.60系统一键折腾，黄金老母鸡，干就完了。",
        "Icon": "<img src=\"img/hen.svg\">",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      // {
      //   "PL-Title": "Bin Loader",
      //   "PL-Bin": "BINLOADER",
      //   "PL-Ver": "v1.0 - By Specter",
      //   "PL-Desc": "Loads a bin or elf file sent to the PS4 IP address on port 9020.<br>Netcat or Netcat GUI is recommended to send the files to the PS4.",
      //   "Icon": "&#xf019;",
      //   "FW": ["9.xx","8.xx","7.xx"]
      // },
      {
        "PL-Title": "FTP 服务",
        "PL-Bin": "pl_FTP.bin",
        "PL-Ver": "v1.08b -By hippie68 / Port By Al Azif",
        "PL-Desc": "PS4的完全访问权限FTP服务器。<br>将您的FTP客户端连接到<br>弹出消息告诉您的IP地址。<br>FTP端口号为1337.",
        "Icon": "<img src=\"img/ftp.svg\">",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "App2USB",
        "PL-Bin": "pl_App2usb.bin",
        "PL-Ver": "v5.0 - Original Version By Stooged / Port By Al Azif",
        "PL-Desc": "将已安装的游戏从您的内置硬盘驱动器（HDD）移动到<br>一个格式化为exFAT的外部USB驱动器中。<br>将app2usb.ini文件放入USB驱动器根目录下一个名为PS4的文件夹中。<br><br>",
        "Icon": "&#xf01c;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "Orbis工具箱",
        "PL-Bin": "pl_OrbisTB.bin",
        "PL-Ver": "v1190 Alpha - By OSM-Made",
        "PL-Desc": "Orbis工具箱，启动和开发自制软件。",
        "Icon": "&#xf0b1;",
        "FW": ["9.00","7.xx"]
      },
      {
        "PL-Title": "退出IDU",
        "PL-Bin": "pl_ExitIDU.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "退出IDU模式.",
        "Icon": "&#xF08B;",
        "FW": ["9.xx","8.xx","7.xx"]
      }
    ]
  },
  "工具": {
    "ID": "ToolsMenu",
    "class": "MenuClass",
    "style": "display:none",
    "payloads": [
      {
        "PL-Title": "工具",
        "PL-Bin": "INFO",
        "PL-Ver": "Menu Info:",
        "PL-Desc": "包含用于执行各种任务和更改PS4设置的工具.",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "PSFree/Lapse修复",
        "PL-Bin": "pl-PsfreeFix.bin",
        "PL-Ver": "v1.0.0 - By RandQalan /Payload By Nazky",
        "PL-Desc": "PSFree/Lapse Fix是一个修复游戏黑屏、存档报错的插件。请先确保使用了GoldHEN在您的设备上运行该插件。",
        "Icon": "&#xF0AD;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "PS4Debug",
        "PL-Bin": "pl_PS4debug.bin",
        "PL-Ver": "v1.1.19 - By CTN",
        "PL-Desc": "用于SaveMounter和Profile Activator的PS4调试工具。",
        "Icon": "&#xf188;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "内核转储",
        "PL-Bin": "pl_KernelDumper.bin",
        "PL-Ver": "v1.0 - Original Version By Eversion / Port By Al Azif",
        "PL-Desc": "将你的内核镜像文件备份到U盘中。<br><br>你的内核镜像文件将被备份到U盘上的KernelDump.bin文件.",
        "Icon": "&#xf828;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "内核模块转储器",
        "PL-Bin": "pl_ModuleDumper.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "内核模块转储插件。",
        "Icon": "&#xf828;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "历史记录屏蔽工具",
        "PL-Bin": "pl_HistoryBlocker.bin",
        "PL-Ver": "v2.0 - Original Version By Stooged / Port By Al Azif",
        "PL-Desc": "禁用PS4 浏览器中上次使用页面的自动打开功能。<br><br>再次运行有效载荷以禁用此功能。",
        "Icon": "&#xf686;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "屏蔽系统升级",
        "PL-Bin": "pl_UpdatesDisable.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "在PS4的更新文件夹中创建虚拟文件，以防止下载不需要的系统更新。<br>如果已存在任何现有更新，该程序还会将其删除。<br><br>！您只需运行此程序一次 !",
        "Icon": "&#xf771;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "启用系统升级",
        "PL-Bin": "pl_UpdatesEnable.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "删除PS4更新文件夹中的虚拟文件，以重新启用更新下载。<br><br>如果您之前禁用了更新，并且希望更新您的主机，请运行此操作.",
        "Icon": "&#xf772;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "禁用ASLR",
        "PL-Bin": "pl_DisableASLR.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "禁用地址空间布局随机化（ASLR），以便更轻松/可重复地处理内存。",
        "Icon": "&#xf771;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "启用浏览器",
        "PL-Bin": "pl_EnableBrowser.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "无需登录PSN即可永久激活浏览器.",
        "Icon": "&#xf772;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "核心时钟",
        "PL-Bin": "pl_KernelClock.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "调整PS4的内部时钟，可用于激活许可证/功能。",
        "Icon": "&#xF017;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "永久性UART",
        "PL-Bin": "pl_PermanentUART.bin",
        "PL-Ver": "v1.02 - By JTAG7371 / Port By Al Azif",
        "PL-Desc": "启用永久性UART.",
        "Icon": "&#xF532;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "RIF重命名",
        "PL-Bin": "pl_RIFRenamer.bin",
        "PL-Ver": "v1.0 - By Al Azif",
        "PL-Desc": "将“假”RIF重命名为“免费”RIF，以获得更好的HEN兼容性。如果你的PKG仅适用于Mira+HEN，请使用此方法。",
        "Icon": "&#xF573;",
        "FW": ["9.xx","8.xx","7.xx"]
      }
    ]
  },
  "备份": {
    "ID": "BackupMenu",
    "class": "MenuClass",
    "style": "display:none",
    "payloads": [
      {
        "PL-Title": "备份工具",
        "PL-Bin": "INFO",
        "PL-Ver": "Menu Info:",
        "PL-Desc": "包含各种备份功能，可备份PS4上所有有用信息。<br><br>注意！这些备份仅适用于您当前的档案和账户ID！<br>如果您打算初始化或更换硬盘，还必须使用系统设置中的官方备份/恢复应用程序备份现有档案！",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "Database数据库备份",
        "PL-Bin": "pl_DBbackup.bin",
        "PL-Ver": "v1.0 - By Leeful / Port By Al Azif",
        "PL-Desc": "为重要数据库文件创建备份。<br><br>您的应用数据库的备份将被创建，并保存在PS4的HDD内部，如果插入了USB驱动器，还会保存到USB中.",
        "Icon": "&#xf56e;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "PKG备份",
        "PL-Bin": "pl_PKGBackup.bin",
        "PL-Ver": "v1.23 - By Kameleon(kmeps4)",
        "PL-Desc": "经过修改的App Dumper版本，可将PKG文件备份到外部硬盘驱动器",
        "Icon": "&#xF56D;",
        "FW": ["9.xx","8.xx","7.xx"]
      }
    ]
  },
  "还原": {
    "ID": "RestoreMenu",
    "class": "MenuClass",
    "style": "display:none",
    "payloads": [
      {
        "PL-Title": "还原工具",
        "PL-Bin": "INFO",
        "PL-Ver": "Menu Info:",
        "PL-Desc": "包含各种有效载荷，可恢复PS4上所有有用内容。",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "Database数据库还原",
        "PL-Bin": "pl_DBrestore.bin",
        "PL-Ver": "v1.0 - By Leeful / Port By Al Azif",
        "PL-Desc": "还原由“数据库备份”功能创建的数据库文件备份<br><br>如果插入了USB驱动器，则将从内部硬盘驱动器或USB驱动器还原备份。<br>如果插入了USB驱动器，则将使用USB上的备份进行还原。",
        "Icon": "&#xf56f;",
        "FW": ["9.xx","8.xx","7.xx"]
      }
    ]
  },
  "转储": {
    "ID": "DumperMenu",
    "class": "MenuClass",
    "style": "display:none",
    "payloads": [
      {
        "PL-Title": "游戏转储",
        "PL-Bin": "INFO",
        "PL-Ver": "Menu Info:",
        "PL-Desc": "包含从PS4中提取游戏的载荷<br>以便您可以构建自己的虚假包进行安装.",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "转储游戏与更新（PS4应用转储工具）",
        "PL-Bin": "pl_DumperApp.bin",
        "PL-Ver": "v1.9 - Original Version By xVortex / Port and Mod By Al Azif",
        "PL-Desc": "将你的游戏或应用备份到U盘中，以便能够创建fpkg文件。<br><br>此载荷会将你的游戏和游戏更新（如果有的话）分别备份到U盘上的两个文件夹中。<br>使用此载荷无需配置文件！",
        "Icon": "&#xf1b3;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "仅转储游戏",
        "PL-Bin": "pl_DumperG.bin",
        "PL-Ver": "v1.9 - Original Version By xVortex / 9.00 Port and Mod By Leeful",
        "PL-Desc": "将你的游戏或应用备份到U盘，以便能够创建fpkg文件。<br><br>此载荷将仅备份你U盘上的游戏。<br><br>使用此载荷无需配置文件!",
        "Icon": "&#xf1b2;",
        "FW": ["9.00","8.xx","7.xx"]
      },
      {
        "PL-Title": "仅转储升级文件",
        "PL-Bin": "pl_DumperU.bin",
        "PL-Ver": "v1.9 - Original Version By xVortex / 9.00 Port and Mod By Leeful",
        "PL-Desc": "将你的游戏或应用备份到U盘中，以便能够创建fpkg文件。<br><br>此有效载荷只会将你的游戏更新备份到U盘中。<br><br>使用此有效载荷无需配置文件!",
        "Icon": "&#xf1b2;",
        "FW": ["9.00","8.xx","7.xx"]
      },
      {
        "PL-Title": "转储游戏+升级文件",
        "PL-Bin": "pl_DumperM.bin",
        "PL-Ver": "v1.9 - Original Version By xVortex / 9.00 Port and Mod By Leeful",
        "PL-Desc": "将你的游戏或应用备份到U盘中，以便能够创建fpkg文件。<br><br>此负载将备份你的游戏和游戏更新（如果有的话），并将它们合并到U盘上的一个文件夹中。<br>使用此负载无需配置文件！",
        "Icon": "&#xf1b3;",
        "FW": ["9.00","8.xx","7.xx"]
      },
      {
        "PL-Title": "PS4合并转储 VTX",
        "PL-Bin": "pl_DumperVTX.bin",
        "PL-Ver": "v1.8 - Original Version By xVortex / 9.00 Port and Mod By RF0oDxM0Dz",
        "PL-Desc": "PS4 游戏合并转储工具",
        "Icon": "&#xf1b3;",
        "FW": ["9.00","8.xx","7.xx"]
      }
    ]
  },
  "伪装": {
    "ID": "SpoofMenu",
    "class": "MenuClass",
    "style": "display:none",
    "payloads": [
      {
        "PL-Title": "伪装工具",
        "PL-Bin": "INFO",
        "PL-Ver": "Menu Info:",
        "PL-Desc": "包含可在PS4上伪装各种内容的载荷.",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "启用DEX测试机模式",
        "PL-Bin": "pl_toDEX.bin",
        "PL-Ver": "v1.0 - By notzecoxao/FW port by Al Azif",
        "PL-Desc": "将您的目标ID转换为（DEX）<br><br>在游戏信息菜单中添加测试机选项，以便仅卸载DLC或仅卸载游戏更新。<br>要移除调试功能，只需重启您的主机或运行To-Retail。",
        "Icon": "&#xf7f9;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "切换回CEX零售机模式",
        "PL-Bin": "pl_toCEX.bin",
        "PL-Ver": "v1.0 - By Leeful",
        "PL-Desc": "将您的目标ID转换回零售（CEX）模式<br><br>移除DEX功能.",
        "Icon": "&#xf7f9;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "启用DEV开发机模式",
        "PL-Bin": "pl_toDEV.bin",
        "PL-Ver": "v1.0 - By ??",
        "PL-Desc": "将您的目标ID转换为（DEV）<br><br>在游戏信息菜单中添加开发机选项，以便仅卸载DLC或仅卸载游戏更新。<br>要移除调试功能，只需重启您的主机或运行To-Retail。",
        "Icon": "&#xf7f9;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "启用toKratos展示机模式",
        "PL-Bin": "pl_toKratos.bin",
        "PL-Ver": "v1.0 - By ??",
        "PL-Desc": "将您的目标ID转换为（toKratos）<br><br>展示机模式。<br>要移除调试功能，只需重启您的主机或运行To-Retail。",
        "Icon": "&#xf7f9;",
        "FW": ["9.xx","8.xx","7.xx"]
      }
    ]
  },
  "金手指": {
    "ID": "ModMenu",
    "class": "MenuClass",
    "style": "display:none",
    "payloads": [
      {
        "PL-Title": "游戏模组菜单",
        "PL-Bin": "INFO",
        "PL-Ver": "Menu Info:",
        "PL-Desc": "包含PS4游戏的Mod菜单和作弊器。",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "PS4金手指(WebRTE)",
        "PL-Bin": "pl_WebRTE.bin",
        "PL-Ver": "v1.01 - By PS4 Trainer / 7.00 to 11.00 Port By EchoStretch",
        "PL-Desc": "运行payload，然后在任何设备上访问ps4trainer.com/Trainer/index.html<br>以使用金手指.",
        "Icon": "&#xf108;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      
    ]
  },
  "Linux": {
    "ID": "LinuxMenu",
    "class": "MenuClass",
    "style": "display:none",
    "payloads": [
      {
        "PL-Title": "Linux菜单",
        "PL-Bin": "INFO",
        "PL-Ver": "Menu Info:",
        "PL-Desc": "Linux插件，可在PS4上运行Linux系统.",
        "Icon": "&#xf30f;",
        "FW": ["9.xx","8.xx","7.xx"]
      },
      {
        "PL-Title": "Linux 1GB Vram",
        "PL-Bin": "pl_linux1gb900.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 1GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 1GB Vram",
        "PL-Bin": "pl_linux1gb903.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 1GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 1GB Vram",
        "PL-Bin": "pl_linux1gb960.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 1GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux 2GB Vram",
        "PL-Bin": "pl_linux2gb900.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 2GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 2GB Vram",
        "PL-Bin": "pl_linux2gb903.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 2GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 2GB Vram",
        "PL-Bin": "pl_linux2gb960.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 2GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux 3GB Vram",
        "PL-Bin": "pl_linux3gb900.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 3GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 3GB Vram",
        "PL-Bin": "pl_linux3gb903.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 3GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 3GB Vram",
        "PL-Bin": "pl_linux3gb960.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 3GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux 4GB Vram",
        "PL-Bin": "pl_linux4gb900.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 4GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 4GB Vram",
        "PL-Bin": "pl_linux4gb903.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 4GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 4GB Vram",
        "PL-Bin": "pl_linux4gb960.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 4GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux.svg\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 1GB Vram",
        "PL-Bin": "pl_linux1gb900pro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 1GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 1GB Vram",
        "PL-Bin": "pl_linux1gb903pro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 1GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 1GB Vram",
        "PL-Bin": "pl_linux1gb960pro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 1GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 2GB Vram",
        "PL-Bin": "pl_linux2gb900pro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 2GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 2GB Vram",
        "PL-Bin": "pl_linux2gb903pro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 2GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 2GB Vram",
        "PL-Bin": "pl_linux2gb960pro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 2GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 3GB Vram",
        "PL-Bin": "pl_linux3gb900pro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 3GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 3GB Vram",
        "PL-Bin": "pl_linux3gb903pro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 3GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 3GB Vram",
        "PL-Bin": "pl_linux3gb960pro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 3GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 4GB Vram",
        "PL-Bin": "pl_linux4gb900pro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 4GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 4GB Vram",
        "PL-Bin": "pl_linux4gb903pro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 4GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 4GB Vram",
        "PL-Bin": "pl_linux4gb960pro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 4GB Vram ported by ps4boot",
        "Icon": "<img src=\"img/linux_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux 1GB Vram Baikal",
        "PL-Bin": "pl_linux1gb900baikal.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 1GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 1GB Vram Baikal",
        "PL-Bin": "pl_linux1gb903baikal.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 1GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 1GB Vram Baikal",
        "PL-Bin": "pl_linux1gb960baikal.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 1GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux 2GB Vram Baikal",
        "PL-Bin": "pl_linux2gb900baikal.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 2GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 2GB Vram Baikal",
        "PL-Bin": "pl_linux12gb903baikal.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 2GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 2GB Vram Baikal",
        "PL-Bin": "pl_linux2gb960baikal.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 2GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux 3GB Vram Baikal",
        "PL-Bin": "pl_linux3gb900baikal.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 3GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 3GB Vram Baikal",
        "PL-Bin": "pl_linux3gb903baikal.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 3GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 3GB Vram Baikal",
        "PL-Bin": "pl_linux3gb960baikal.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 3GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux 4GB Vram Baikal",
        "PL-Bin": "pl_linux4gb900baikal.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux 4GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux 4GB Vram Baikal",
        "PL-Bin": "pl_linux4gb903baikal.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux 4GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux 4GB Vram Baikal",
        "PL-Bin": "pl_linux4gb960baikal.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux 4GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 1GB Vram Baikal",
        "PL-Bin": "pl_linux1gb900baikalpro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 1GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 1GB Vram Baikal",
        "PL-Bin": "pl_linux1gb903baikalpro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 1GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 1GB Vram Baikal",
        "PL-Bin": "pl_linux1gb960baikalpro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 1GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 2GB Vram Baikal",
        "PL-Bin": "pl_linux2gb900baikalpro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 2GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 2GB Vram Baikal",
        "PL-Bin": "pl_linux2gb903baikalpro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 2GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 2GB Vram Baikal",
        "PL-Bin": "pl_linux2gb960baikalpro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 2GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 3GB Vram Baikal",
        "PL-Bin": "pl_linux3gb900baikalpro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 3GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 3GB Vram Baikal",
        "PL-Bin": "pl_linux3gb903baikalpro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 3GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 3GB Vram Baikal",
        "PL-Bin": "pl_linux3gb960baikalpro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 3GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      },
      {
        "PL-Title": "Linux Pro 4GB Vram Baikal",
        "PL-Bin": "pl_linux4gb900baikalpro.bin",
        "PL-Ver": "9.00 v19",
        "PL-Desc": "Linux Pro 4GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.00"]
      },
      {
        "PL-Title": "Linux Pro 4GB Vram Baikal",
        "PL-Bin": "pl_linux4gb903baikalpro.bin",
        "PL-Ver": "9.03-9.04 v19",
        "PL-Desc": "Linux Pro 4GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.03","9.04"]
      },
      {
        "PL-Title": "Linux Pro 4GB Vram Baikal",
        "PL-Bin": "pl_linux4gb960baikalpro.bin",
        "PL-Ver": "9.50,9.51,9.60 v19",
        "PL-Desc": "Linux Pro 4GB Vram Baikal ported by ps4boot",
        "Icon": "<img src=\"img/linux_Baikal_pro.png\">",
        "FW": ["9.50","9.51","9.60"]
      }
    ]
  }
}