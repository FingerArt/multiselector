function constructStringFromChoices(choices, separator) {
    var selected = [];

    choices.forEach(function(choice) {
        if (choice[2]) {
            selected.push(choice[0]);
        }
    });

    return selected.join(separator);
}

var MultiSelector = function() {
  this.evaluate = function() {
    return constructStringFromChoices(this.choices, this.separator);
  };

  this.title = function() {
      var clipboardEmoji = '\uD83D\uDCCB';

      if (!this.choices.length) {
          return "Multi Selector " + clipboardEmoji;
      }

      return clipboardEmoji;
  };

  this.text = function() {
    return constructStringFromChoices(this.choices, this.separator) || null;
  };
};

MultiSelector.inputs = [
    InputField("choices", "Choices", "KeyValueList", {
      persisted: true,
      keyName: "Value",
      valueName: "Description"
    }),
    InputField("separator", "Separator", "String", {defaultValue: ","})
];

// Set the Extension Identifier (must be same as the directory name).
MultiSelector.identifier = "me.elliotchance.MultiSelectorDynamicValue";

// Give a display name to your Dynamic Value.
MultiSelector.title = "Multi Selector";

// Link to the Dynamic Value documentation.
MultiSelector.help = "https://github.com/elliotchance/multiselector";

// Call to register extension function.
registerDynamicValueClass(MultiSelector);
