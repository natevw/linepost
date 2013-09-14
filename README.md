# linepost

Reads from stdin and posts each input line to a given URL as text/plain. Best used with a CouchDB [update handler](http://docs.couchdb.org/en/latest/ddocs.html#update-functions), natch.

## Usage

    npm install -g linepost
    cat somelog.file | linepost http://localhost:5984/logs/_design/collector/_update/message

…should do the trick. (You can include HTTP basic auth in the URL.)