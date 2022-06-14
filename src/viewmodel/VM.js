import NewsViewModel from './instance/NewsViewModel';

export const VM = {
    initialize() {
        this.build();
    },

    build() {
        this.news = new NewsViewModel();
    },
};
