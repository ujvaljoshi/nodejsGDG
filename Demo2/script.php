<?php 

echo "Starting \n\n\n";

// Getting content from file
$contents = file_get_contents('sample.txt');
echo "Contents of file : " . $contents . "\n\n\n";
echo "Finished.\n";