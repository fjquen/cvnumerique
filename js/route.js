class route {

    constructor() {
        this.blocHome = $(".bloc-home");
        this.blocProject = $(".bloc-project");
        this.blocPerso = $(".bloc-perso");
        this.blocContact = $(".bloc-contact");
        this.selectorBloc = $("li.menu");
        this.blocProjet1 = $("div.bloc-projet1");
        this.blocProjet2 = $("div.bloc-projet2");
        this.blocProjet3 = $("div.bloc-projet3");
        this.blocProjet4 = $("div.bloc-projet4");
        this.blocProjet5 = $("div.bloc-projet5");
        this.selectorProject = $(".projet button");
        this.loadSite();
        this.loadPortfolio();
        this.routeSite();
        this.routePortfolio();
    }
    loadSite() {
        this.blocHome.css("display", "block");
        this.blocProject.css("display", "none");
        this.blocPerso.css("display", "none");
        this.blocContact.css("display", "none");
    }
    routeSite() {
        var selector = this;
        this.selectorBloc.click(function () {
            let getClass = $(this).attr("class").substr(23);
            switch (getClass) {
                case "item-home":
                    selector.blocHome.css("display", "block");
                    selector.blocProject.css("display", "none");
                    selector.blocPerso.css("display", "none");
                    selector.blocContact.css("display", "none");
                    break

                case "item-projet":
                    selector.blocHome.css("display", "none");
                    selector.blocProject.css("display", "block");
                    selector.blocPerso.css("display", "none");
                    selector.blocContact.css("display", "none");
                    break

                case "item-perso":
                    selector.blocHome.css("display", "none");
                    selector.blocProject.css("display", "none");
                    selector.blocPerso.css("display", "block");
                    selector.blocContact.css("display", "none");
                    break

                case "item-contact":
                    selector.blocHome.css("display", "none");
                    selector.blocProject.css("display", "none");
                    selector.blocPerso.css("display", "none");
                    selector.blocContact.css("display", "block");
                    break

                default:
                    alert("faux");
                    break
            }
        })
    }

    loadPortfolio(){
        this.blocProjet2.css("display", "none");
        this.blocProjet3.css("display", "none");
        this.blocProjet4.css("display", "none");
        this.blocProjet5.css("display", "none");
    } 

    routePortfolio(){
        var selectorBlocProject = this;
        this.selectorProject.click(function() {
            this.idname = $(this).attr("id");

            switch (this.idname) {
                case "projet1-tab":
                    selectorBlocProject.blocProjet1.css("display", "block");
                    selectorBlocProject.blocProjet2.css("display", "none");
                    selectorBlocProject.blocProjet3.css("display", "none");
                    selectorBlocProject.blocProjet4.css("display", "none");
                    selectorBlocProject.blocProjet5.css("display", "none");
                    break
                case "projet2-tab":
                    selectorBlocProject.blocProjet2.css("display", "block");
                    selectorBlocProject.blocProjet1.css("display", "none");
                    selectorBlocProject.blocProjet3.css("display", "none");
                    selectorBlocProject.blocProjet4.css("display", "none");
                    selectorBlocProject.blocProjet5.css("display", "none");
                    break
                case "projet3-tab":
                    selectorBlocProject.blocProjet3.css("display", "block");
                    selectorBlocProject.blocProjet2.css("display", "none");
                    selectorBlocProject.blocProjet1.css("display", "none");
                    selectorBlocProject.blocProjet4.css("display", "none");
                    selectorBlocProject.blocProjet5.css("display", "none");
                    break
                case "projet4-tab":
                    selectorBlocProject.blocProjet4.css("display", "block");
                    selectorBlocProject.blocProjet2.css("display", "none");
                    selectorBlocProject.blocProjet3.css("display", "none");
                    selectorBlocProject.blocProjet1.css("display", "none");
                    selectorBlocProject.blocProjet5.css("display", "none");
                    break
                case "projet5-tab":
                    selectorBlocProject.blocProjet5.css("display", "block");
                    selectorBlocProject.blocProjet2.css("display", "none");
                    selectorBlocProject.blocProjet3.css("display", "none");
                    selectorBlocProject.blocProjet4.css("display", "none");
                    selectorBlocProject.blocProjet1.css("display", "none");
                    break
            }
            

        })
    }
}