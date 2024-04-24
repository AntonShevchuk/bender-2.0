/**
 * Oh, yep, it is htmlEntities
 *
 * @param {String} text
 * @return {String}
 */
function htmlEntities (text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Apply JIRA formatting for Google Chat
 *
 * @param {String} text
 * @return {String}
 */
function googleChatToJira(text) {
  return String(text)
    .replace(/<b>(.*?)<\/b>/g, "*$1*") // bold
    .replace(/<i>(.*?)<\/i>/g, "_$1_") // italics
    .replace(/<u>(.*?)<\/u>/g, "+$1+") // underline
    .replace(/<s>(.*?)<\/s>/g, "-$1-") // strikethrough
    .replace(/<font color="#([0-9A-F]{6})">(.*?)<\/font>/g, "{color:#$1}$2{color}") // font color
    .replace(/<font color="([a-z]+)">(.*?)<\/font>/g, "{color:$1}$2{color}")
    .replace(/<a href="(.*?)">(.*?)<\/a>/g, "[$2|$1]") // hyperlink
}

/**
 * Apply Google Chat formatting for JIRA
 *
 * @param {String} text
 * @return {String}
 */
function jiraToGoogleChat(text) {
  return String(text)
    .replace(/\*(.*?)\*/g, "<b>$1</b>") // bold
    .replace(/{\*}(.*?){\*}/g, "<b>$1</b>")
    .replace(/_(.*?)_/g, "<i>$1</i>") // italics
    .replace(/{_}(.*?){_}/g, "<i>$1</i>")
    .replace(/\+(.*?)\+/g, "<u>$1</u>") // underline
    .replace(/{\+}(.*?){\+}/g, "<u>$1</u>")
    .replace(/-(.*?)-/g, "<s>$1</s>") // strikethrough
    .replace(/{-}(.*?){-}/g, "<s>$1</s>")
    .replace(/{color:#([0-9A-F]{6})}(.*?){color}/gi, "<font color=\"#$1\">$2</font>") // font color
    .replace(/{color:red}(.*?){color}/gi, "<font color=\"#FF0000\">$1</font>")
    .replace(/{color:([a-z]+)}(.*?){color}/gi, "$2")
    .replace(/\[(.*?)\|(.+?)\]/g, "<a href=\"$2\">$1</a>") // hyperlink
}
