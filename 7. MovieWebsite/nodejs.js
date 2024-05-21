var name = 'k8805';
var letter = 'Dear '+name+'\n\
\n\
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et auctor tortor, iaculis posuere mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque sodales tortor eu neque condimentum,'+name+ 'vel facilisis enim rhoncus. Integer vel purus eget metus dignissim lacinia ut ut erat. Duis tempor rutrum tellus, eu egestas dolor blandit ut. Cras gravida ac elit id dignissim. Maecenas dictum lobortis maximus. Praesent quis eros turpis. Duis mollis elementum leo ac mattis.'+name;

var letter = `Dear ${name}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et auctor tortor, iaculis posuere mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque sodales tortor eu neque condimentum, vel facilisis enim rhoncus.${name}
Integer vel purus eget metus dignissim lacinia ut ut erat. Duis tempor rutrum tellus, eu egestas dolor blandit ut. ${1+1}
Cras gravida ac elit id dignissim. Maecenas dictum lobortis maximus. Praesent quis eros turpis. Duis mollis elementum leo ac mattis.${name}`;




console.log(letter);