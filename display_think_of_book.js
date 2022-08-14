console.log(getPageOfBook());

/**
 * ページ数を取得する
 * @returns {string|null} ページ情報が取得できた場合ページ数を、ない場合はnullを返す
 */
function getPageOfBook() {
    const THINK_INFO_POSITION_IN_BOOK_INFO = 0;
    let book_info = document.getElementById("rich_product_information");
    if(book_info === null) {
        return null;
    }

    let book_size = book_info.getElementsByClassName("a-declarative");
    let book_page_element = book_size[THINK_INFO_POSITION_IN_BOOK_INFO].getElementsByTagName("span")[0];
    let book_page_string = book_page_element.innerText;

    return removeStringInBookThinkInfo(book_page_string);
}

/**
 * 「XXXページ」というように取得されるため、ページという文字列を削除する
 * @param book_page_string spanタグから取得した文字列
 * @returns string
 */
function removeStringInBookThinkInfo(book_page_string){
    return book_page_string.slice(0, -3);
}