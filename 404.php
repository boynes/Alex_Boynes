<?php
	require 'config.php';
	$page_title = 'File Not Found (404)';
	$current_page = '404';
?>
<?php include(ROOT .'/elements/header.php'); ?>

<div class="page-content">
	<section class="home-intro">
		<h1>Sorry, we can't find that :(</h1>
		<p>It looks like you're after a page that doesn't exist anymore, or has been moved - sorry about that!</p>
		<p>Try search for it below in our sitemap ...</p>
		<?php include(ROOT .'/elements/sitemap.php'); ?>
	</section>
</div>


<?php include(ROOT .'/elements/footer.php'); ?>
