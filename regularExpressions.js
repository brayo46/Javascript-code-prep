//how to create a regular expression

/*You construct a regular expression in one of two ways:

Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:

*/

var re  = /ab+c/;

//Or calling the constructor function of the RegExp object, as follows:

var r = new RegExp('ab+c');

// the expression /abc/  precisely locates the substring 'abc' in a string

var r = /ab*c/ //match a character combination in which a single a is followed by zero or more
//b's followed by a c immediately
/*In the string "cbbabbbbcdebc," the pattern matches the substring 'abbbbc'.*/

var a = /a\*/ //a backslash   '\' removes specialness of '*' to enable matches with strings
//like 'a*'

var match = /^A/ //does not match the 'A' in "an A", but does match the 'A' in "An E".

var match = /t$/ //does not match the 't' in "eater", but does match it in "eat".

var match = /bo*/ //Matches the preceding expression 0 or more times. 
//Example: matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled" but nothing in "A goat grunted".

var match = /a+/
//Matches the preceding expression 1 or more times. E.gFor example, /a+/ matches the 'a' in "candy" and all the a's in "caaaaaaandy", but nothing in "cndy".

var match = /e?le?/

//Matches the preceding expression 0 or 1 time. 
//Example: For example, /e?le?/ matches the 'el' in "angel" and the 'le' in "angle" and also the 'l' in "oslo".

var match = /\d+/ //matches numbers in a string

var match = /\d+?/ //matches the fewest possible characters e.g in 123 it matches only '1

var match = /.n/ 
//matches any single character except the newline character.
//Example:/.n/ matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.

(x) //The '(foo)' and '(bar)' in the pattern /(foo) (bar) \1 \2/ match and remember the first two words in the string "foo bar foo bar"




\w 
/*Matches any alphanumeric character including the underscore. 
Equivalent to [A-Za-z0-9_].
For example, /\w/ matches 'a' in "apple," '5' in "$5.28," and '3' in "3D."*/


\B //matches a position where the previous and next character are of the same type: Either both must be words, or both must be non-words.

//Example : /B\../ matches 'oo' in noon day

















