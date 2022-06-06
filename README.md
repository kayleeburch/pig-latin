# Pig Latin

# Premise
Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.

(There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)

See <http://en.wikipedia.org/wiki/Pig_latin> for more details.

# Exercise
You're going to implement a pig latin word and phrase converter program. Your code should accept a string as a parameter and return the string 'pig latin-ified'

# Example
```ruby
translate("apple") # => appleay

translate("university") # => universityay

translate("apple university") # => appleay universityay

translate("School") # => Oolschay

translate("I go to apple university") # => Iay ogay otay appleay universityay.

translate("Hi, I'm Zach") # => Ihay, I'may Achzay

translate("Hi, I'm Zach.\nHow are you?")
# => Ihay, I'may Achzay.
# => Owhay areway ouyay?
```
