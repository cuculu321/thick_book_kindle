console.log(getThinkOfBook());

function getThinkOfBook() {
    const THINK_INFO_POSITION_IN_BOOK_INFO = 0;
    let book_info = document.getElementById("rich_product_information");
    let book_size = book_info.getElementsByClassName("a-declarative");
    let book_think_element = book_size[THINK_INFO_POSITION_IN_BOOK_INFO].getElementsByTagName("span")[0];
    let book_think_string = book_think_element.innerText;

    return removeStringInBookThinkInfo(book_think_string);
}

/**
 * 「XXXページ」というように取得されるため、ページという文字列を削除する
 * @param book_think_string spanタグから取得した文字列
 * @returns string
 */
function removeStringInBookThinkInfo(book_think_string){
    return book_think_string.slice(0, -3);
}