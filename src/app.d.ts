/**
 * 注意：App的实例方法部分来自mpvue的扩展，部分来自自主扩展，而非全部官方方法
 */

interface App {
    globalData: GlobalData;
    getToken(): string;
    getOpenId(): string;
    getUnionId(): string;
    [key: string]: any;
}

interface GlobalData {
    appOptions: {
        path: string;
        query: { [key: string]: any };
        scene: number;
    };
}

export default App;
