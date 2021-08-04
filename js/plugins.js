// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_MessageCore","status":true,"description":"メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"3","Default Width":"Graphics.boxWidth - 300","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","Description Wrap":"false","---フォント---":"","Font Name":"GameFont","Font Size":"24","Font Size Change":"6","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"20","screenWidth":"1104","screenHeight":"624","changeWindowWidthTo":"1104","changeWindowHeightTo":"624","renderingMode":"auto","alwaysDash":"on","textSpeed":"1","autoSaveFileId":"0","errorMessage":"エラーが発生しました。ゲームの作者にご連絡ください。","showErrorDetail":"true","enableProgressBar":"true","maxRenderingFps":"0"}},
{"name":"ChangeTileSize","status":false,"description":"Allows maps based on a grid size other than 48x48","parameters":{"Tile Size":"32","Tileset Image Folder":"img/tilesetsVXA/","Parallax Image Folder":"img/parallaxes/"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"FixImageLoading","status":true,"description":"画像ロード時のチラつき防止プラグイン","parameters":{}},
{"name":"LoadingExtend","status":true,"description":"ロード中画像拡張プラグイン","parameters":{"イメージ列数":"4","イメージ行数":"1","表示タイプ":"2","アニメーション間隔":"10","表示位置X座標":"","表示位置Y座標":"","待機フレーム数":"10","点滅なし":"ON"}},
{"name":"TMLinkCredit","status":true,"description":"タイトル画面にクレジットコマンドを追加します。\r\n制作スタッフの紹介をWebサイトへのリンク付きで表示できます。","parameters":{"credits":"[\"{\\\"name\\\":\\\"トリアコンタン 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://triacontane.blogspot.com/\\\"}\",\"{\\\"name\\\":\\\"tomoaky 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://twitter.com/tomoaky\\\"}\",\"{\\\"name\\\":\\\"lunatlazur 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://lunatlazur.com/\\\"}\",\"{\\\"name\\\":\\\"溟犬一六 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https:/star-write-dream.com\\\"}\",\"{\\\"name\\\":\\\"ペンギンの寝床 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"http://woodpenguin.blog.fc2.com/\\\"}\",\"{\\\"name\\\":\\\"ツキミ 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://forum.tkool.jp/index.php?threads/%E3%80%90%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%80%91%E3%83%84%E3%82%AD%E3%83%9F%E5%BC%8F%E9%81%B8%E6%8A%9E%E8%82%A2%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6.750/\\\"}\",\"{\\\"name\\\":\\\"きまぐれアフター 様\\\",\\\"help\\\":\\\"\\\",\\\"url\\\":\\\"\\\"}\"]","versionText":"{\"text\":\"ver0.0.2β\",\"x\":\"2\",\"y\":\"2\",\"fontSize\":\"24\",\"textColor\":\"#ffffff\",\"outlineWidth\":\"4\",\"outlineColor\":\"#000000\"}","licenseText":"{\"text\":\"©ツイ民 2021\",\"x\":\"0\",\"y\":\"570\",\"fontSize\":\"24\",\"textColor\":\"#ffffff\",\"outlineWidth\":\"4\",\"outlineColor\":\"#000000\"}","creditsCommand":"クレジット","itemHeight":"84","helpFontSize":"16","urlFontSize":"16","urlMaxLength":"50","useHelpWindow":"true","helpWindowText":"使用させていただいた素材の作者一覧です。\\n","titleCommandAlign":"center"}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"WindowBlinkStop","status":true,"description":"ウィンドウ点滅停止プラグイン","parameters":{}},
{"name":"AudioStreaming","status":true,"description":"音声読み込みを高速化し、oggファイルのみを使用します。","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"ChangeWindowTouchPolicy","status":true,"description":"ウィンドウタッチ仕様変更プラグイン","parameters":{"枠外タッチ動作":"なし"}},
{"name":"InvalidClickOutsideMessageWindow","status":true,"description":"「文章の表示...」イベントコマンドにおいて、ウインドウ外のクリックを無効にします。","parameters":{}},
{"name":"MessageTriggerSe","status":false,"description":"メッセージ送りSEプラグイン","parameters":{"validateSwitchId":"0","soundEffect":"{\"name\":\"small-bell02\",\"volume\":\"50\",\"pitch\":\"100\",\"pan\":\"0\"}","doseContinueOnly":"true"}},
{"name":"Lunatlazur_PauseSignAfterText","status":true,"description":"メッセージ送り記号位置変更プラグイン","parameters":{}},
{"name":"NOM_ChrPicture","status":false,"description":"立ち絵表示プラグイン","parameters":{}},
{"name":"Lunatlazur_ConfigurableMessageClosing","status":true,"description":"メッセージ表示継続プラグイン","parameters":{}},
{"name":"SNH_MsgNameLabel","status":true,"description":"メッセージ名前ラベルプラグイン","parameters":{"文字サイズ":"24","文字サイズ自動調整":"true","文字色":"17","文字フチ色":"19","文字の寄せ方（縦）":"center","文字の寄せ方（横）":"left","左右位置調整":"5","上下位置調整":"-40","文字の表示順":"99","ネームプレート":"[\"{\\\"width\\\":\\\"190\\\",\\\"height\\\":\\\"40\\\",\\\"paddingX\\\":\\\"12\\\",\\\"paddingY\\\":\\\"5\\\",\\\"color1\\\":\\\"{\\\\\\\"red\\\\\\\":\\\\\\\"240\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"248\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"255\\\\\\\",\\\\\\\"opacity\\\\\\\":\\\\\\\"0.0\\\\\\\"}\\\",\\\"gradationMode\\\":\\\"false\\\",\\\"gradationVertical\\\":\\\"false\\\",\\\"color2\\\":\\\"{\\\\\\\"red\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"green\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"blue\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"opacity\\\\\\\":\\\\\\\"0.0\\\\\\\"}\\\"}\"]","追加四角部品":"","追加円部品":"","追加ネームプレート画像":"","追加画像部品":""}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{"itemIconSwitchId":"0","lineSpacingVariableId":"0","frameWindowSkin":"","frameWindowPadding":"18","padCharacter":"0"}},
{"name":"DWindow","status":true,"description":"動的ウィンドウ生成プラグイン","parameters":{"X座標の変数番号":"0","Y座標の変数番号":"0","横幅の変数番号":"0","高さの変数番号":"0","最前面に表示":"false","ピクチャに含める":"0"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"false","ピクチャ番号の変数番号":"0","ポインタX座標の変数番号":"0","ポインタY座標の変数番号":"0","タッチ操作抑制":"false","タッチ操作抑制スイッチ":"0","戦闘中常にコモン実行":"false","並列処理として実行":"false","無効スイッチ":"0"}},
{"name":"CommonPopupCore","status":true,"description":"ver1.02/汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{"Text Back Color":"rgba(0,0,0,0.6)","Text Back FileName":"popup_back%d"}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"96","fontSize":"20","fontOutlineWidth":"4","fontOutlineColor":"rgba(0, 0, 0, 0.5)","width":"200","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"GetInformation","status":false,"description":"ver1.05/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。","parameters":{"Info Disable Switch Id":"0","Use Battle Info":"true","Use Rewards Info":"true","Info Font Size":"16","Info Count":"120","Info Delay":"20","Info MoveWait":"100","Info MoveFade":"10","Info Position":"","Info Slide Action":"","Info Sup X":"0","Info Sup Y":"0","Gold Icon Index":"361","Get Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[24]手に入れた！","Lost Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[2]失った・・・","Get Item Text":"「\\I[_icon]_name」 を\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text":"「\\I[_icon]_name」 を\\C[2]失った・・・\\n\\C[6]_desc1","Get Item Text Num":"「\\I[_icon]_name」 を\\C[14]_num個\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text Num":"「\\I[_icon]_name」を\\C[14]_num個\\C[2]失った・・・\\n\\C[6]_desc1","Get Skill Text":"_actorは「\\I[_icon]_name」 を\\C[24]覚えた！\\n\\C[6]_desc1","Lost Skill Text":"_actorは「\\I[_icon]_name」を \\C[2]忘れてしまった・・・\\n\\C[6]_desc1","Exp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Exp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Lv Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Lv Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Param Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Param Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Abp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Abp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Class Lv Up Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Class Lv Down Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・"}},
{"name":"PopupMessage","status":true,"description":"メッセージの表示をポップアップに変更する制御文字_pum[delay]を追加します。","parameters":{"Pop Message FontSize":"28","Pop Message Count":"200"}},
{"name":"NOM_DestImageCustomize","status":true,"description":"目的地画像カスタマイズプラグイン","parameters":{"不透明度":"255","合成方法":"0","表示色":"","独自画像":"system_clickTarget"}},
{"name":"OnlineAvatar","status":false,"description":"Firebaseを使ってプレイヤーをオンライン同期します。","parameters":{"apiKey":"AIzaSyC8Tv1C3QjIVSaSIOFw1IqemlX1BNdDw2Y","authDomain":"hoshi-644d0.firebaseapp.com","databaseURL":"https://hoshi-644d0-default-rtdb.firebaseio.com/","avatarEvent":"1","syncSwitchStart":"1001","syncSwitchEnd":"1999","syncVariableStart":"1001","syncVariableEnd":"1999"}},
{"name":"111_InputForm","status":false,"description":"ゲーム画面上にHTMLの入力フォームを表示します","parameters":{"OK Button Text":"OK","Display Cancel Button":"0","Cancel Button Text":"✕","Judge Switch Interval":"100","Switch ID Selected OK":"0","Force OK Switch ID":"0","Force Cancel Switch ID":"0"}},
{"name":"UCHU_MobileOperation","status":false,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"false","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"160","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"EventInformation","status":true,"description":"イベントの頭上に文字を表示したい時に使います","parameters":{}},
{"name":"NOM_MessageWindowPosition","status":true,"description":"メッセージウィンドウ位置調整プラグイン","parameters":{}},
{"name":"Columns_Plural","status":true,"description":"選択肢カラム数拡張","parameters":{"columns_Variables":"1","InitOnClose":"true"}},
{"name":"MPP_ChoiceEX","status":true,"description":"【ver.3.11】選択肢の機能拡張","parameters":{"maxPageRow":"6","Disabled Index":"none","=== Command ===":"","Plugin Commands":"{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\",\"ChoiceUnderMessage\":\"ChoiceUnderMessage\"}","Event Comment":"{\"ChoiceHelp\":\"選択肢ヘルプ\"}"}},
{"name":"EventLabel","status":true,"description":"イベントラベルプラグイン","parameters":{"showDefault":"false","hideNoImage":"true","hideNameEv":"true","fontSize":"12","backColor":"rgba(0,0,0,0)","padding":"0"}},
{"name":"TMNamePop_forName","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"0","fontSize":"12","fontOutlineWidth":"4","fontOutlineColor":"rgba(0, 0, 0, 0.5)","width":"160","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"TKM_ChoiceList","status":false,"description":"ツキミ式選択肢","parameters":{"use":"true","-- Choice settings --":"","image":"","tone":"230, 230, 230","fontSize":"24","okFlashDuration":"12","okFlashFrequency":"3","textAlign":"0","-- Advanced settings --":"","backOpacity":"192","fontOLWidth":"3","fontOLColor":"rgba(0, 0, 0, 0.5)","vertiPadding":"2","choiceHoriPadding":"32","choiceVertiPadding":"5","maxRows":"10","maxRowsC":"3","mineLineWidth":"96"}},
{"name":"MKR_PlayerMoveForbid","status":true,"description":"(v1.0.5) プレイヤー移動禁止プラグイン","parameters":{"Default_Move_Flag":"21","Default_Menu_Flag":"false","Enter Flag":"true"}},
{"name":"TerraxLighting","status":true,"description":"v1.5.1 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"400","Add to options":"Yes","Option menu entry":"Lighting effects","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"0","Screensize X":"1104","Screensize Y":"624","Kill Switch":"No"}},
{"name":"HalfMove","status":true,"description":"半歩移動プラグイン","parameters":{"8方向移動":"true","8方向移動スイッチ":"0","イベントすり抜け":"true","強制中無効":"false","角回避":"true","斜め移動中減速":"false","トリガー拡大":"false","実歩数調整":"false","上半分移動不可地形":"[\"0\"]","上半分移動不可Region":"[\"0\"]","下半分移動不可地形":"[\"0\"]","下半分移動不可Region":"[\"0\"]","右半分移動不可地形":"[\"0\"]","右半分移動不可Region":"[\"0\"]","左半分移動不可地形":"[\"0\"]","左半分移動不可Region":"[\"0\"]","右上移動不可地形":"[\"0\"]","右上移動不可Region":"[\"0\"]","右下移動不可地形":"[\"0\"]","右下移動不可Region":"[\"0\"]","左上移動不可地形":"[\"0\"]","左上移動不可Region":"[\"0\"]","左下移動不可地形":"[\"0\"]","左下移動不可Region":"[\"0\"]","全方向移動不可地形":"[\"0\"]","全方向移動不可Region":"[\"0\"]","イベント複数起動防止":"false","イベント位置重複OK":"false"}},
{"name":"TitleNewGameOnly","status":true,"description":"ニューゲームオンリープラグイン","parameters":{"startString":"ゲーム開始","font":"{\"name\":\"\",\"size\":\"40\",\"bold\":\"false\",\"italic\":\"false\",\"color\":\"rgba(255,255,255,1.0)\"}","fileExistAction":"0","soundEffect":"{\"name\":\"small-bell02\",\"volume\":\"90\",\"pitch\":\"100\",\"pan\":\"0\"}","adjustY":"0"}}
];
