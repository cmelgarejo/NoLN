( function() {
    var observer = new MutationObserver( function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            
            if (newNodes !== null) {
                var nodes = document.querySelectorAll('.fbUserContent, .userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4, ._4-u2');
                
                for (var ii = 0, nn = nodes.length; ii < nn; ii++) {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';

                    if (text && 
                        (
                            text.indexOf('lanacion.com.py') >= 0 
                            || text.indexOf('hoy.com.py') >= 0
                            || text.indexOf('adndigital.com.py') >= 0
                            || text.indexOf('rtv.com.py') >= 0
                        ) && 
                        nodes[ii].style.display != 'none') {
                            nodes[ii].style.display = 'none';
                            chrome.runtime.sendMessage({action: "removeDiv"});
                    }
                }
            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

})();
