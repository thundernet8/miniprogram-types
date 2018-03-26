export default WX;

interface WX {
    /**
     * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面
     * @param obj {NavParamObject}
     */
    navigateTo(obj: NavParamObject): void;

    /**
     * 关闭当前页面，跳转到应用内的某个页面
     * @param obj {NavParamObject}
     */
    redirectTo(obj: NavParamObject): void;

    /**
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * @param obj {NavParamObject}
     */
    switchTab(obj: NavParamObject): void;

    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层
     * @param obj {NavigateBackParamObject}
     */
    navigateBack(obj: NavigateBackParamObject): void;

    /**
     * 关闭所有页面，打开到应用内的某个页面
     * @param obj {NavParamObject}
     */
    reLaunch(obj: NavParamObject): void;
}

/**
 * Paramter Object
 */
interface BaseParamObject {
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface NavParamObject extends BaseParamObject {
    url: string;
}

interface NavigateBackParamObject {
    // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
    delta: number;
}
