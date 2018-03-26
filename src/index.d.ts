import WX from "./wx";
import App from "./app";
import Page from "./page";

export = MP;

export as namespace MP;

declare namespace MP {
    var wx: WX;

    function getApp(): App;

    function getCurrentPages(): Page[];
}
