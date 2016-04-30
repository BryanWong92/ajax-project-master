$.getJSON('http://api.flickr.com/feed/photos_public.gne?jsoncallback=?', 
          { 
            tags: animal,
            format: "json"
          },
          function(data) {
          
          }
         );