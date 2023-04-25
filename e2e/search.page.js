const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'

class SearchPage {
    static visit() {
        cy.visit(URL) 
    }
    static fillSearch(search){
        cy.get(SEARCH).type(search)
    }
    static search(){
        cy.get(SEARCH).type('{enter}')
    }
}

export default SearchPage 
