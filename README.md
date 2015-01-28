Simple Lazy Load
=========
jQuery plugin used to pull items in to the DOM as they scroll in to view - used to keep the initial page size down

###How to use

Include Simple Lazy Load

```html
<script src="js/simpleLazyLoad.min.js"></script>
```

###Create your items

```html
<div class="container">
    <div class="item"><img src="blank.gif" data-src="my-high-res-image.jpg"></div>
    <div class="item"><img src="blank.gif" data-src="my-high-res-image2.jpg"></div>
    <div class="item"><img src="blank.gif" data-src="my-high-res-image3.jpg"></div>
    <div class="item"><img src="blank.gif" data-src="my-high-res-image4.jpg"></div>
    <div class="item"><img src="blank.gif" data-src="my-high-res-image5.jpg"></div>
</div>
```

###Initialise the plugin

```html
<script>
$(function(){
	$('.container .item img').simpleLazyLoad();
});
</script>
```
