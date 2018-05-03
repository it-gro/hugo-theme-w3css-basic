---
title:       "Code highlighting"
date:        2018-01-08T10:34:50+01:00
resImgTeaser:  teaserpics/bitbucket.org/pygments-main-logo.png
teaserpicNotOnPage:
icon:        "far fa-file-code"
description: "Show syntax highlighting with chroma"
tags:
  - Showcase
categories:
  - This Theme
---


{{< highlight perl "linenos=table,hl_lines=5 7-8 21,linenostart=1" >}}
#!/usr/bin/perl

##############################################################################
#
use strict;

while(<@ARGV>) {
  my $my_dir = $_;
  die("$!") if (not -d $my_dir);
  chdir $my_dir or die("$!");
  #if (not -d "thumbs") {mkdir("thumbs") or die("$!");}

  my $my_ext_regex = "jpg|png|gif|svg";
  while (glob("*.jpg *.png *.gif")) {  # fix svg later
    my $my_pic = $_;
    next if $my_pic =~ m/-thumb\.($my_ext_regex)$/i;
    my ($my_ext) = ($my_pic =~ m/\.($my_ext_regex)$/i);
    my $my_thumb = "$my_pic";
    $my_thumb =~ s/\.($my_ext_regex)$/-thumb.\1/i;
    $my_ext =~ s/jpg$/jpeg/i;
    system("convert -define $my_ext:size=500x180 $my_pic -auto-orient -thumbnail 250x90 -unsharp 0x.5 $my_thumb \n");
  }

  my $our_cmd = "
  for file in *.jpg *.png *.gif *.svg; do
    if [ -e \$file ]; then
      set \$(identify \"\$file\")
      echo \$file \$3
    fi
  done
  ";
   
  open INPUT, "$our_cmd |" or die("$!");
  printf "{\{< heg-load-photoswipe >}\}\n";
  printf "{\{< heg-gallery title=\"$my_dir\" caption-effect=\"none\" hover-effect=\"grow\" >}\}\n";
  while(<INPUT>) {
    my ($my_file, $my_size) = split;
    next if $my_file =~ m/-thumb\.($my_ext_regex)$/i;
    printf "{\{< heg-figure thumb=\"%s\" link=\"%s\" size=\"%s\" >}\}\n", "-thumb", "/$my_dir$my_file", "$my_size";
  }
  printf "{\{< /heg-gallery >}\}\n";
  close INPUT;

}

{{< /highlight >}}
