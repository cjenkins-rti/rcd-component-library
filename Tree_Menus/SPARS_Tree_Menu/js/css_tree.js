 $(document).ready(function () {
     $('.tree li:has(ul) li').hide();
      $('.tree li:has(ul)').addClass('parent_li').find(' > a').attr('title', 'Collapse this branch');
      $('.tree li.parent_li > a').on('click', function (e) {
          $('ul.ul_closed').removeClass('ul_closed');
          var children = $(this).parent('li.parent_li').find(' > ul > li');
          if (children.is(":visible")) {
              children.hide('slow');
              $(this).attr('title', 'Expand this branch to see documents.').find(' > i').addClass('fa-caret-down').removeClass('fa-caret-up');
          } else {
              children.show('slow');
              $(this).attr('title', 'Collapse this branch to hide documents from view.').find(' > i').addClass('fa-caret-up').removeClass('fa-caret-down');
          }
          e.stopPropagation();
          e.preventDefault();
      });
  });
