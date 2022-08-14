let think = convertPageToThink(getPageOfBook());
attachView(createView(think));

/**
 * ビューHTMLをDOMに追加
 * @param view
 */
function attachView(view){
    const image_block = document.getElementById("imageBlockNew_feature_div");
    image_block.append(view);
}

/**
 * ビューHTMLを作成
 * @param thick
 * @returns {HTMLDivElement}
 */
function createView(thick){
    const view_book_thick = document.createElement("div");
    view_book_thick.className = "book_thick";

    const view_child_left = document.createElement("div");
    view_child_left.className = "book_thick_left";
    view_child_left.style.paddingTop = thick/2 + "mm"
    view_child_left.style.paddingBottom = thick/2 + "mm"
    view_book_thick.appendChild(view_child_left);

    const view_child_right = document.createElement("div");
    view_child_right.className = "book_thick_right";
    view_child_right.style.paddingTop = thick/2 + "mm"
    view_child_right.style.paddingBottom = thick/2 + "mm"
    view_child_right.style.paddingLeft= thick/4 + "mm"
    view_child_right.style.marginLeft = "-" + thick/2 + "px"
    view_book_thick.appendChild(view_child_right);

    return view_book_thick;
}

/**
 * ページ数を取得する
 * @returns {number|null} ページ情報が取得できた場合ページ数を、ない場合はnullを返す
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

    return parseInt(removeStringInBookThinkInfo(book_page_string));
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
 * @returns int thick 単位はmm
 */
function convertPageToThink(page){
    // const JYOUSHITSU_70K = 0.1;
    const ROUGHLY_THINK_PER_A_PAGE = 0.08;
    return ROUGHLY_THINK_PER_A_PAGE * page;
}