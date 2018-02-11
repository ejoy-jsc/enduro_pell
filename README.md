# Enduro Pell

This is a brick for [Enduro](https://www.endurojs.com/).

Installation and setup here: [Enduro Bricks](https://www.endurojs.com/docs/enduro-bricks).

Learn more about Pell here: [Pell](https://github.com/jaredreich/pell).

## Usage
Use the type `pell`.

`pell` enables the following actions by default:
- Bold
- Italic
- Underline
- Strikethrough
- Ordered List
- Unordered list
- Link

You can add additional actions from the brick options in `enduro.json` at the root of your Enduro project. For example:

```
"bricks": {
  "enduro_pell": {
    "actions": [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "paragraph",
      "quote",
      "olist",
      "ulist",
      "link"
    ]
  }
}
```

An example of a set of fields inside an Enduro flat file:

```
$text_type: 'pell'
text: ''
```

## Development
Feel free to submit different configurations or improvements via github issues. Pell has many more features, this brick uses the minimum.
