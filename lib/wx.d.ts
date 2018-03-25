export default WX;

interface WX {
    navigateTo(obj: NavParamObject): void;
    redirectTo(obj: NavParamObject): void;
    switchTab(obj: NavParamObject): void;
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
