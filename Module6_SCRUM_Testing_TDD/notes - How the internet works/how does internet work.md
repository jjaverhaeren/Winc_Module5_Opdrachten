Browser(=client) makes request to server and gets response from server.
wanneer je je verbind met internet krijg je een IP-address.

Tijdens developping: aparte css en/of JS-files is prima. Zodra je naar deply gaat- de files samenvoegen tbv sneller laden ivm minder requests.

request bestaat uit:
header en (eventueel) POST body

REQUESTS:

header:
Host
Method
Path
Cookies
user-agent
Content Type

if posting data, a POST BODY is also included.

RESPONSE:
Content Type
Status code

RESPONSE BODY
file that's requested (HTML, CSS, JS, Image..)
or your results of request (json, xml...)

URI: Uniform Resource Identifier : a string of characters used to identify a resource on the internet. address or name.
URL: Uniform Resource Locator : a string of characters used to identify a resource on the internet by address.
URN: Uniform Resource Locator : a string of characters used to identify a resource on the internet by name.

iedere URL of URN is dus een URI.

Because resources can have the same name, it is not effective to use URN's.

URL = Protocol + Domain

Protocol = http or https = language standard.
Domain = bijv. www.mywebsite.com

STATUS CODE: (100 -iets - information, 200 iets - OK, 300 iets - redirected, 400 iets -client error, 500 iets - server error)
