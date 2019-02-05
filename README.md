# jSearch
Javascript Snippet for filter nodes html by input

### Use:
1. Insert script on your code.
2. Add function on event 'onkeyup' tag on input text.
3. Parsing in [element] parameter your ID or Class for working. Done.

### Example:
```sh
<input type="text" onkeyup="jSearch.filter('.listClass li');">
<ul class="listClass">
    <li>Test A <span>12345</span></li>
    <li>Not</li>
    <li>Intention</li>
    <li>Test D</li>
    <li>Your</li>
    <li>Test F</li>
    <li>Test G <span>12345</span></li>
    <li>Test H</li>
    <li>Test I</li>
</ul>
```
