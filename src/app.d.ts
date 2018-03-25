interface App {
    globalData: GlobalData;
    getToken(): string;
    getOpenId(): string;
    getUnionId(): string;
}

interface GlobalData {
    appOptions: {
        path: string;
        query: { [key: string]: any };
        scene: number;
    };
}

export default App;
