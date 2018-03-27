export default WX;

interface WX {
    /// 网络

    /**
     * 发起网络请求
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-network.html
     * @param obj {RequestParamObject}
     */
    request(obj: RequestParamObject): void;

    /**
     * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。
     * 如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-network.html
     * @param obj {UploadFileParamObject}
     */
    uploadFile(obj: UploadFileParamObject): void;

    /**
     * 下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径
     * 注：文件的临时路径，在小程序本次启动期间可以正常使用，如需持久保存，需在主动调用 wx.saveFile，才能在小程序下次启动时访问得到
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html#wxdownloadfileobject
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-network.html
     * @param obj {DownloadFileParamObject}
     */
    downloadFile(obj: DownloadFileParamObject): void;

    /// 媒体

    /// 文件

    /// 数据缓存

    /// 位置

    /// 设备

    /// 界面

    // - 交互反馈

    /**
     * 显示消息提示框
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowtoastobject
     * @param obj
     */
    showToast(obj: ShowToastParamObject): void;

    /**
     * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowloadingobject
     * @param obj
     */
    showLoading(obj: ShowLoadingParamObject): void;

    /**
     * 隐藏消息提示框
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhidetoast
     */
    hideToast(): void;

    /**
     * 隐藏 loading 提示框
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhideloading
     */
    hideLoading(): void;

    /**
     * 显示模态弹窗
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject
     * @param obj
     */
    showModal(obj: ShowModalParamObject): void;

    /**
     * 显示操作菜单
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowactionsheetobject
     * @param obj
     */
    showActionSheet(obj: ShowActionSheetParamObject): void;

    // - 设置导航条

    /**
     * 动态设置当前页面的标题
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxsetnavigationbartitleobject
     * @param obj
     */
    setNavigationBarTitle(obj: SetNavigationBarTitleParamObject): void;

    /**
     * 在当前页面显示导航条加载动画
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxshownavigationbarloading
     */
    showNavigationBarLoading(): void;

    /**
     * 隐藏导航条加载动画
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxhidenavigationbarloading
     */
    hideNavigationBarLoading(): void;

    /**
     * 设置导航条颜色
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/setNavigationBarColor.html
     * @param obj
     */
    setNavigationBarColor(obj: SetNavigationBarColorParamObject): void;

    // - 设置tabBar

    /**
     * 为 tabBar 某一项的右上角添加文本
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxsettabbarbadgeobject
     * @param obj
     */
    setTabBarBadge(obj: SetTabBarBadgeParamObject): void;

    /**
     * 移除 tabBar 某一项右上角的文本
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxremovetabbarbadgeobject
     * @param obj
     */
    removeTabBarBadge(obj: RemoveTabBarBadgeParamObject): void;

    /**
     * 显示 tabBar 某一项的右上角的红点
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxshowtabbarreddotobject
     * @param obj
     */
    showTabBarRedDot(obj: ShowTabBarRedDotParamObject): void;

    /**
     * 隐藏 tabBar 某一项的右上角的红点
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxhidetabbarreddotobject
     * @param obj
     */
    hideTabBarRedDot(obj: HideTabBarRedDotParamObject): void;

    /**
     * 动态设置 tabBar 的整体样式
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxsettabbarstyleobject
     * @param obj
     */
    setTabBarStyle(obj: SetTabBarStyleParamObject): void;

    /**
     * 动态设置 tabBar 某一项的内容
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxsettabbaritemobject
     * @param obj
     */
    setTabBarItem(obj: SetTabBarItemParamObject): void;

    /**
     * 显示 tabBar
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxshowtabbarobject
     * @param obj
     */
    showTabBar(obj: ShowTabBarParamObject): void;

    /**
     * 隐藏 tabBar
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-tabbar.html#wxhidetabbarobject
     * @param obj
     */
    hideTabBar(obj: HideTabBarParamObject): void;

    // - 设置置顶信息

    /**
     * 动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容
     * 注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg："setTopBarText: fail invoke too frequently"
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxsettopbartextobject
     * @param obj
     */
    setTopBarText(obj): void;

    // - 导航

    /**
     * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject
     * @param obj {NavParamObject}
     */
    navigateTo(obj: NavParamObject): void;

    /**
     * 关闭当前页面，跳转到应用内的某个页面
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxredirecttoobject
     * @param obj {NavParamObject}
     */
    redirectTo(obj: NavParamObject): void;

    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxswitchtabobject
     * @param obj {NavParamObject}
     */
    switchTab(obj: NavParamObject): void;

    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatebackobject
     * @param obj {NavigateBackParamObject}
     */
    navigateBack(obj: NavigateBackParamObject): void;

    /**
     * 关闭所有页面，打开到应用内的某个页面
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxrelaunchobject
     * @param obj {NavParamObject}
     */
    reLaunch(obj: NavParamObject): void;

    // - 动画

    /**
     * 创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性
     * 注意: export 方法每次调用后会清掉之前的动画操作
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-animation.html#wxcreateanimationobject
     * @param obj
     */
    createAnimation(obj): void;

    // - 位置

    /**
     * 将页面滚动到目标位置
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/scroll.html
     * @param obj
     */
    pageScrollTo(obj): void;

    // - 绘图

    /**
     * 创建 canvas 绘图上下文（指定 canvasId）。在自定义组件下，第二个参数传入组件实例this，以操作组件内 <canvas/> 组件
     * Tip: 需要指定 canvasId，该绘图上下文只作用于对应的 <canvas/>
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/create-canvas-context.html
     * @param canvasId
     * @param component
     */
    createCanvasContext(canvasId: string, component);

    /**
     * 把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/temp-file.html
     * @param obj
     * @param component
     */
    canvasToTempFilePath(obj, component): void;

    /**
     * 返回一个数组，用来描述 canvas 区域隐含的像素数据
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/get-image-data.html
     * @param obj
     */
    canvasGetImageData(obj): void;

    /**
     * 将像素数据绘制到画布的方法
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/canvas/put-image-data.html
     * @param obj
     */
    canvasPutImageData(obj): void;

    // - 下拉刷新

    /**
     * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/pulldown.html#wxstartpulldownrefresh
     * @param obj
     */
    startPullDownRefresh(obj): void;

    /**
     * 停止当前页面下拉刷新
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/pulldown.html#wxstoppulldownrefresh
     */
    stopPullDownRefresh(): void;

    /// 第三方平台

    /**
     * 获取第三方平台自定义的数据字段
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ext-api.html#wxgetextconfigobject
     * @param obj
     */
    getExtConfig(obj): void;

    /**
     * 获取第三方平台自定义的数据字段的同步接口
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ext-api.html#wxgetextconfigsync
     */
    getExtConfigSync(): AnyObject;

    /// 开放接口

    // - 登录

    /**
     * 调用接口wx.login() 获取临时登录凭证（code）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html#wxloginobject
     * @param obj
     */
    login(obj): void;

    /**
     * 校验用户当前session_key是否有效
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html#wxchecksessionobject
     * @param obj
     */
    checkSession(obj): void;

    // - 授权

    /**
     * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/authorize.html
     * @param obj
     */
    authorize(obj): void;

    // - 用户信息

    /**
     * 获取用户信息，withCredentials 为 true 时需要先调用 wx.login 接口
     * 需要用户授权 scope.userInfo
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/open.html#wxgetuserinfoobject
     * @param obj
     */
    getUserInfo(obj): void;

    // - 微信支付

    /**
     * 发起微信支付
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-pay.html#wxrequestpaymentobject
     * @param obj
     */
    requestPayment(obj): void;

    // - 转发

    /**
     * 显示当前页面的转发按钮
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxshowsharemenuobject
     * @param obj
     */
    showShareMenu(obj): void;

    /**
     * 隐藏转发按钮
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxhidesharemenuobject
     * @param obj
     */
    hideShareMenu(obj): void;

    /**
     * 更新转发属性
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxupdatesharemenuobject
     * @param obj
     */
    updateShareMenu(obj): void;

    /**
     * 获取转发详细信息
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#wxgetshareinfoobject
     * @param obj
     */
    getShareInfo(obj): void;

    // - 收货地址

    /**
     * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址
     * 需要用户授权 scope.address
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/address.html#wxchooseaddressobject
     * @param obj
     */
    chooseAddress(obj): void;

    // - 卡券

    /**
     * 批量添加卡券
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxaddcardobject
     * @param obj
     */
    addCard(obj): void;

    /**
     * 查看微信卡包中的卡券
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxopencardobject
     * @param obj
     */
    openCard(obj): void;

    // - 设置

    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果
     * 注：设置界面只会出现小程序已经向用户请求过的权限
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/setting.html#wxopensettingobject
     * @param obj
     */
    openSetting(obj): void;

    /**
     * 获取用户的当前设置
     * 注：返回值中只会出现小程序已经向用户请求过的权限
     * @param obj
     */
    getSetting(obj): void;

    // - 微信运动

    /**
     * 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口
     * 需要用户授权 scope.werun
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/we-run.html#wxgetwerundataobject
     * @param obj
     */
    getWeRunData(obj): void;

    // - 打开小程序

    /**
     * 打开同一公众号下关联的另一个小程序。（注：必须是同一公众号下，而非同个 open 账号下）
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/navigateToMiniProgram.html
     * @param obj
     */
    navigateToMiniProgram(obj): void;

    /**
     * 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/navigateBackMiniProgram.html
     * @param obj
     */
    navigateBackMiniProgram(obj): void;

    // - 获取发票抬头

    /**
     * 选择用户的发票抬头
     * 需要用户授权 scope.invoiceTitle
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/chooseInvoiceTitle.html
     * @param obj
     */
    chooseInvoiceTitle(obj): void;

    // - 生物认证

    /**
     * 获取本机支持的 SOTER 生物认证方式
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/checkIsSupportSoterAuthentication.html
     * @param obj
     */
    checkIsSupportSoterAuthentication(obj): void;

    /**
     * 开始 SOTER 生物认证
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/startSoterAuthentication.html
     * @param obj
     */
    startSoterAuthentication(obj): void;

    /**
     * 获取设备内是否录入如指纹等生物信息的接口
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/checkIsSoterEnrolledInDevice.html
     * @param obj
     */
    checkIsSoterEnrolledInDevice(obj): void;

    /// 数据

    /**
     * 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/analysis-report.html
     * @param eventName {String} 事件名
     * @param data {Object} 上报的自定义数据。key为配置中的字段名，value为上报的数据
     */
    reportAnalytics(eventName: string, data: AnyObject): void;

    /// 更新

    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/getUpdateManager.html
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/framework/operating-mechanism.html
     */
    getUpdateManager(): UpdateManager;

    /// 多线程

    /**
     * 创建一个 Worker 线程，并返回 Worker 实例，目前限制最多只能创建一个 Worker，创建下一个 Worker 前请调用 Worker.terminate
     * scriptPath 为 worker 的入口文件路径，需填写绝对路径
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/createWorker.html
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/framework/workers.html
     * @param scriptPath
     */
    createWorker(scriptPath: string): WxWorker;

    /// 调试接口

    /**
     * 设置是否打开调试开关，此开关对正式版也能生效
     * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/setEnableDebug.html
     * @param obj
     */
    setEnableDebug(obj): void;

    /// 其他
    [key: string]: any;
}

////// paramters & return values interface

/**
 * Any Object
 */
interface AnyObject {
    [key: string]: any;
}

/**
 * Paramter Object
 */
interface BaseParamObject {
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface RequestParamObject extends BaseParamObject {
    url: string;
    data?: Object | String | ArrayBuffer;
    header?: { [key: string]: any };
    method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
    dataType?: 'json' | 'text';
    responseType?: 'text' | 'arraybuffer';
}

interface UploadFileParamObject extends BaseParamObject {
    /**
     * 开发者服务器 url
     */
    url: string;
    /**
     * 要上传文件资源的路径
     */
    filePath: string;
    /**
     * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
     */
    name: string;
    /**
     * HTTP 请求 Header, header 中不能设置 Referer
     */
    header?: { [key: string]: any };
    /**
     * HTTP 请求中其他额外的 form data
     */
    formData?: { [key: string]: any };
    /**
     * 接口调用成功的回调函数
     * @param data {String} 开发者服务器返回的数据
     * @param statusCode {Number} 开发者服务器返回的 HTTP 状态码
     */
    success?: (data: string, statusCode: number) => void;
}

interface DownloadFileParamObject extends BaseParamObject {
    /**
     * 下载资源的 url
     */
    url: string;

    /**
     * HTTP 请求 Header, header 中不能设置 Referer
     */
    header?: { [key: string]: any };

    /**
     * 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}
     * @param tempFilePath {String} 临时文件路径，下载后的文件会存储到一个临时文件
     * @param statusCode {Number} 开发者服务器返回的 HTTP 状态码
     */
    success?: (tempFilePath: string, statusCode: number) => void;
}

interface ShowToastParamObject extends BaseParamObject {
    /**
     * 提示的内容
     */
    title: string;

    /**
     * 图标，有效值 "success", "loading", "none"
     */
    icon?: 'success' | 'loading' | 'none';

    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     */
    image?: string;

    /**
     * 提示的延迟时间，单位毫秒，默认：1500
     */
    duration?: number;

    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
}

interface ShowLoadingParamObject extends BaseParamObject {
    /**
     * 提示的内容
     */
    title: string;

    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
}

interface ShowModalParamObject extends BaseParamObject {
    /**
     * 提示的标题
     */
    title: string;

    /**
     * 提示的内容
     */
    content: string;

    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean;

    /**
     * 取消按钮的文字，默认为"取消"，最多 4 个字符
     */
    cancelText?: string;

    /**
     * 取消按钮的文字颜色，默认为"#000000"
     */
    cancelColor?: string;

    /**
     * 确定按钮的文字，默认为"确定"，最多 4 个字符
     */
    confirmText?: string;

    /**
     * 确定按钮的文字颜色，默认为"#3CC51F"
     */
    confirmColor?: string;

    /**
     * 接口调用成功的回调函数
     * @param confirm 为 true 时，表示用户点击了确定按钮
     * @param cancel 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
     */
    success?: (confirm: boolean, cancel: boolean) => void;
}

interface ShowActionSheetParamObject extends BaseParamObject {
    /**
     * 按钮的文字数组，数组长度最大为6个
     */
    itemList: string[];

    /**
     * 按钮的文字颜色，默认为"#000000"
     */
    itemColor?: string;

    /**
     * 接口调用成功的回调函数
     * @param tapIndex 用户点击的按钮，从上到下的顺序，从0开始
     */
    success?: (tapIndex: number) => void;
}

interface SetNavigationBarTitleParamObject extends BaseParamObject {
    /**
     * 页面标题
     */
    title: string;
}

interface SetNavigationBarColorParamObject extends BaseParamObject {
    /**
     * 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
     */
    frontColor: '#ffffff' | '#000000';

    /**
     * 背景颜色值，有效值为十六进制颜色
     */
    backgroundColor: string;

    /**
     * 动画效果
     * @param duration 动画变化时间，默认0，单位：毫秒
     * @param timingFunc 动画变化方式，默认 linear
     */
    animation?: { duration: number; timingFunc: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' };

    /**
     * 接口调用成功的回调函数
     * @param errMsg 调用结果
     */
    success?: (errMsg: string) => void;
}

interface SetTabBarBadgeParamObject extends BaseParamObject {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;

    /**
     * 显示的文本，超过 3 个字符则显示成"…"
     */
    text: string;
}

interface RemoveTabBarBadgeParamObject extends BaseParamObject {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
}

interface ShowTabBarRedDotParamObject extends BaseParamObject {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
}

interface HideTabBarRedDotParamObject extends BaseParamObject {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
}

interface SetTabBarStyleParamObject extends BaseParamObject {
    /**
     * tab 上的文字默认颜色
     */
    color?: string;

    /**
     * tab 上的文字选中时的颜色
     */
    selectedColor?: string;

    /**
     * tab 的背景色
     */
    backgroundColor?: string;

    /**
     * tabbar上边框的颜色， 仅支持 black/white
     */
    borderStyle?: 'black' | 'white';
}

interface SetTabBarItemParamObject extends BaseParamObject {
    /**
     * tabBar 的哪一项，从左边算起
     */
    index: number;

    /**
     * tab 上按钮文字
     */
    text?: string;

    /**
     * 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
     */
    iconPath?: string;

    /**
     * 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效
     */
    selectedIconPath?: string;
}

interface ShowTabBarParamObject extends BaseParamObject {
    /**
     * 是否需要动画效果，默认无
     */
    animation?: boolean;
}

interface HideTabBarParamObject extends BaseParamObject {
    /**
     * 是否需要动画效果，默认无
     */
    animation?: boolean;
}

interface NavParamObject extends BaseParamObject {
    url: string;
}

interface NavigateBackParamObject {
    // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
    delta: number;
}

///// Ohters

interface UpdateManager {
    /**
     * 当向微信后台请求完新版本信息，会进行回调
     * @param callback
     */
    onCheckForUpdate(callback: (res: OnCheckForUpdateCallbackParams) => void): void;

    /**
     * 当新版本下载完成，会进行回调
     * @param callback
     */
    onUpdateReady(callback): void;

    /**
     * 当新版本下载失败，会进行回调
     * @param callback
     */
    onUpdateFailed(callback): void;

    /**
     * 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启
     */
    applyUpdate(): void;
}

interface OnCheckForUpdateCallbackParams {
    hasUpdate: boolean;
}

interface WxWorker {
    /**
     * 向 Worker 线程发送消息，message 参数为需要发送的消息，必须是一个可序列化的 JavaScript 对象
     * @param obj
     */
    postMessage(obj: AnyObject): void;

    /**
     * 监听 Worker 线程向当前线程发送的消息
     * @param message
     */
    onMessage(message: AnyObject): void;

    /**
     * 结束当前 Worker 线程，仅限在主线程 Worker 实例上调用
     */
    terminate(): void;
}
