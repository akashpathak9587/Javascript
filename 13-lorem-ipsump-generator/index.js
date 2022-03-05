const text = [
    `The articles in English are the definite article the and the indefinite articles a and an. The definite article is used when the speaker believes that the listener knows the identity of the noun's referent (because it is obvious, because it is common knowledge, or because it was mentioned in the same sentence or an earlier sentence). The indefinite article is used when the speaker believes that the listener does not have to be told the identity of the referent. No article is used in some noun phrases.`,
    `The indefinite article a (before a consonant sound) or an (before a vowel sound) is used only with singular, countable nouns. It indicates that the referent of the noun phrase is one unspecified member of a class. For example, the sentence An ugly man was smoking a pipe does not specify the identity of the ugly man or pipe.`,
    `If it is required to be concise, e.g. in headlines, signs, labels, and notes, articles are often omitted along with certain other function words. For example, rather than The mayor was attacked, a newspaper headline might say just Mayor attacked.`,
    `In Middle English, the (þe) was frequently abbreviated as a þ with a small e above it, similar to the abbreviation for that, which was a þ with a small t above it. During the latter Middle English and Early Modern English periods, the letter thorn (þ) in its common script, or cursive, form came to resemble a y shape. As a result, the use of a y with an e above it (EME ye.svg) as an abbreviation became common. It can still be seen in reprints of the 1611 edition of the King James Version of the Bible in places such as Romans 15:29 or in the Mayflower Compact. Historically, the article was never pronounced with a y sound even when it was so written.`,
    `The form an is used before words starting with a vowel sound, regardless of whether the word begins with a vowel letter.[6] This avoids the glottal stop (momentary silent pause) that would otherwise be required between a and a following vowel sound. Where the next word begins with a consonant sound, a is used. Examples: a box; an apple; an SSO (pronounced "es-es-oh"); an MP3 (pronounced "em-pee-three"); a HEPA filter (here, HEPA is an acronym, a series of letters pronounced as a word rather than as individual letters); an hour (the h is silent); a one-armed bandit (pronounced "won..."); an heir (pronounced "air"); an herb in American English (where the h is silent), but a herb in British English; "a unionized worker" but "an ionized particle". Before words beginning with /ju/, an was formerly widespread, e.g. an unicorn, an eulogy, but has largely been superseded by a since the 19th century.`,
    `In a process called juncture loss, the n has wandered back and forth between the indefinite article and words beginning with vowels over the history of the language, where for example what was once a nuncle is now an uncle. The Oxford English Dictionary gives such examples as smot hym on the hede with a nege tool from 1448 for smote him on the head with an edge tool, as well as a nox for an ox and a napple for an apple. Sometimes the change has been permanent. For example, a newt was once an ewt (earlier euft and eft), a nickname was once an eke-name, where eke means "extra" (as in eke out meaning "add to"), and in the other direction, a napron (meaning a little tablecloth, related to the word napkin) became an apron, and a naddre became an adder. The initial n in orange was also dropped through juncture loss, but this happened before the word was borrowed into English.`,
    `The existential determinative (or determiner) some is sometimes used as a functional equivalent of a(n) with plural and uncountable nouns (also called a partitive). For example, Give me some apples, Give me some water (equivalent to the singular countable forms an apple and a glass of water). Grammatically this some is not required; it is also possible to use zero article: Give me apples, Give me water. The use of some in such cases implies some limited quantity. (Compare the forms unos/unas in Spanish, which are the plural of the indefinite article un/una.) Like the articles, some belongs to the class of "central determiners", which are mutually exclusive (so "the some boys" is ungrammatical).`,
    `In sorting titles and phrases alphabetically, articles are usually excluded from consideration, since being so common makes them more of a hindrance than a help in finding the desired item. For example, The Comedy of Errors is alphabetized before A Midsummer Night's Dream, because the and a are ignored and comedy alphabetizes before midsummer. In an index, the former work might be written "Comedy of Errors, The", with the article moved to the end.`,
    `"The" can be used with both singular and plural nouns, with nouns of any gender, and with nouns that start with any letter. This is different from many other languages which have different articles for different genders and/or numbers.`,
    `In Middle English, the (þe) was frequently abbreviated as a þ with a small e above it, similar to the abbreviation for that, which was a þ with a small t above it. During the latter Middle English and Early Modern English periods, the letter thorn (þ) in its common script, or cursive, form came to resemble a y shape. As a result, the use of a y with an e above it (EME ye.svg) as an abbreviation became common. It can still be seen in reprints of the 1611 edition of the King James Version of the Bible in places such as Romans 15:29 or in the Mayflower Compact. Historically, the article was never pronounced with a y sound even when it was so written.`
]

const form = document.querySelector(".lorem-form");
const numofpara = document.querySelector("#numofpara");
const numofparaRange = document.querySelector("#numofparaRange");
const result = document.querySelector(".lorem-text");

numofpara.addEventListener("input", syncParaNumbers);
numofparaRange.addEventListener("input", syncParaNumbers);
function syncParaNumbers(e) {
    const value = e.target.value;
    numofpara.value = value;
    numofparaRange.value = value;
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const value = parseInt(numofpara.value);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
})