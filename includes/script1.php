<!-- across descriptor -->
<?php
$mass = 'header-top.php form.php kazax.php seria.php status.php katalog.php buy.php zakaz.php testimonials.php garant.php dostavka.php nabors.php form.php';
$res = explode(' ', $mass);
$content = 
"<section class=\"section section_padding\">
<div class=\" container\">
	<div class=\"row\">
		<div class=\"col-md-12\">
		</div>
	</div>
</div>
</section>
";
$file1 = fopen('../index.php', 'w');
fwrite($file1, "<?php require_once('includes/header.php'); ?>\n");

for($i = 0; $i < count($res); $i++){
	echo `touch $res[$i]`;
	$file2 = fopen($res[$i], "w") or die('не удалось открыть файл');
	fwrite($file2, $content);
	fclose($file2);
	fwrite($file1, "<?php require_once('includes/$res[$i]'); ?>"."\n");
}
fwrite($file1, "<?php require_once('includes/footer.php'); ?>\n");
fwrite($file1, "\n</body>\n</html>");
fclose($file1);
?>





