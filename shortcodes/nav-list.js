// generates a page navigation list
const
  listElement = 'ul',
  listItemElement = 'li',
  listClass = '',
  listItemClass = '',
  activeListItemClass = '_active',
  anchorClass = '',
  activeAnchorClass = '_active',
  listItemHasChildrenClass = 'has-children';

// pass in collections.all | eleventyNavigation, (current) page, and maximum depth level
module.exports = (pageNav, page, maxLevel = 999) => {

  function navRecurse(entry, level = 1) {

    let childPages = '';

    if (level < maxLevel) {
      for (let child of entry.children) {
        childPages += navRecurse(child, level++);
      }
    }

    let
      active = (entry.url === page.url),
      listItemClassList = [];
      anchorClassList = [];
      
    listItemClass && listItemClassList.push(listItemClass);
    anchorClass && anchorClassList.push(anchorClass);

    if (childPages) listItemClassList.push(listItemHasChildrenClass);
    if (active) {
      activeListItemClass && listItemClassList.push(activeListItemClass);
      activeAnchorClass && anchorClassList.push(activeAnchorClass);
    }

    return (
      `<${listItemElement}` + (listItemClassList.length ? ` class="${ listItemClassList.join(' ') }"` : '') +'><a' + 
      (anchorClassList.length ? ` class="${ anchorClassList.join(' ') }"` : '') +
      (active ? '' : ` href="${ entry.url }"`) + '>' + entry.title +'</a>' +
      (childPages && `<${ listElement }>${ childPages }</${ listElement }>`) + `</${listItemElement}>`
    );

  }

  let nav = '';
  for (let entry of pageNav) {
    nav += navRecurse(entry);
  }

  return `<${ listElement }` + (listClass ? ` class="${listClass}"` : '') + `>${ nav }</${ listElement }>`;

};