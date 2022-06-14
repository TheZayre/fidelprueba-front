import NewsApi from './apis/NewsApi';

export const Apis = {

    initialize() {
        this.news = new NewsApi();
    }

};
