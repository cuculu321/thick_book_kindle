console.log(convertPageToThink(getPageOfBook()));

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

/**
 * 使う紙によってかなり厚みが異なるが、今のAmazonの仕様的に使用される紙まで特定するのは不可能
 * そのため仮置きで0.8mmとして扱う
 * @param page ページ数
 * @returns int think 単位はmm
 */
function convertPageToThink(page){
    // const JYOUSHITSU_70K = 0.1;
    const ROUGHLY_THINK_PER_A_PAGE = 0.8;
    return ROUGHLY_THINK_PER_A_PAGE * page;
}