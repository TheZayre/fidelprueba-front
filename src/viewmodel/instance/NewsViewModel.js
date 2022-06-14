import ViewModel from '../@base/ViewModel';
import {Apis} from '../../domain/Apis';

export default class NewsViewModel extends ViewModel {
  constructor() {
    super();
    this.get();
    this.interval = setInterval(()=>this.get(),4000)
  }

  async get() {
    let news = await Apis.news.getNews()
    this.notify(news)
  }
}
