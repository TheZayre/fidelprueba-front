import Api from '../@base/Api';

export default class NewsApi extends Api {
    
    //Obtiene las news, tantoa rchivadas como las que no.
    getNews() {
        return super.get(`/news`);
    }

    //Archiva una new con una fecha en concreto.
    archiveNew(id, archivedDate) {
        let body = {id: id, archiveDate: archivedDate}
        return super.post(`/archiveNew`, body);
    }

    //Elimina una noticia archivada.
    deleteArchived(id) {
        let body = {id: id}
        return super.delete(`/deleteArchived`, body);
    }
}
