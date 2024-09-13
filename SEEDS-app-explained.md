SEEDS App

Structure
=========

1.  SEEDS App UI

    1.  Seed Input (top center)
    
        1. Reset Seed button

    2.  Editor (left)

        1.  Basic Actions

            1.  Randomize

            2.  Show Layers

            3.  Show Display Settings

        2.  Layers UI

            1.  The Grid

                1. Toggle Layer buttons

        3.  Display Settings UI

            1.  Attunement selector

                1.  Attunement label container

                    1.  Attunement label

                    2.  Attunement input

                    3.  Decrement attunement

                    4.  Increment attunement
                
            2. Mod Controls

                1.  9 Mod Toggle buttons

                2.  5 Mod Range sliders

                3.  Mod input

                4.  Reset Mod button

    3.  Preview (center)

        1.  Preview SVG

        2.  Set Queue Item button

    4.  Queue (right)

        1.  Queue Pagination

            1. Page Label Container

                1.  Page Label

                2.  Page Input

            2.  Decrement Page button

            3.  Increment Page button

        2.  Queue List

            1.  Queue Items

                1.  Queue Item Label

                2.  Lock button

                3.  Reset Queue Item button

        3.  Inscribe button

* * * * *

Editor
======

The Editor (and Seed Input) is how the user interacts with the Preview SVG, modifying its appearance.

The Editor has its own state for seed, mod, and attunement numbers. This Editor's state has the following default values:

editorSeed = 0

editorMod = 000000000000000

editorAttunement = 0

The editor's state is separate from the state for each Queue Item's respective seed, mod and attunement values.

The Editor UI and the Seed, Mod, and Attunement Inputs always reflect the Editor's current state; manipulating the Editor's buttons and sliders updates the values in the related Input boxes accordingly, and entering valid values into the Editor's Input fields updates the Editor's buttons and sliders accordingly.

💠 Basic Actions
----------------

### ➡ Randomize button

Clicking this button by default randomizes the layers and display settings.

If the Show Layers button is toggled on, this button only randomizes the seed number.

If the Show Display Settings button is toggled on, this button only randomizes the mod and attunement numbers.

### ➡ Show Layers button

Clicking this button reveals the Layers UI.

### ➡ Show Display Settings button

Clicking this button reveals the Display Settings UI.

💠 Layers UI
------------

### ➡ Seed Input

An input displaying the editor's seed number. The Seed Input can accept any number from 0 - 1267650600228229401496703205375. Entering a valid number in the Seed Input updates the Preview SVG and the Layers UI accordingly.

#### ➡ Reset Seed button

Clicking the Reset Seed button resets the seed to its initial value.

### ➡ The Grid

A 10x10 grid of 100 buttons numbered from 1 - 100.

### ➡ Toggle Layer buttons

100 numbered buttons in the Layers UI grid that correspond to the individual bits that toggle layers on/off in the Preview SVG.

💠 Display Settings UI
----------------------

### ➡ Attunement Selector

A selector that displays the Preview SVG's attunement, and increments or decrements the attunement number.

#### ➡ Attunement Label Container

A clickable container that contains the Attunement Label. When clicked, resets the editor's attunement to its default value.

#### ➡ Attunement Label

A label simply reading "Attunement:"

#### ➡ Attunement Input

An input displaying the editor's Attunement number. The input is incorporated into the Attunement Label that can accept a numerical value from 1 to 9. 

Note: (Clicking the Attunement Input does not trigger the Label Container click event)

#### ➡ Decrement Attunement button

A button that decrements the page count, and at 0 loops to 9.

#### ➡ Increment Attunement button

A button that increments the page count, and at 9 loops to 0.

### ➡ Mod Controls

The mod number is a 15-digit string representing various display settings and values:

#### ➡ 9 x Mod Toggle buttons

A series of buttons that toggle 9 bits on/off. The last 3 buttons are mutually exclusive; only one of them can be toggled at once, automatically toggling the other two off.

#### ➡ 5 x Mod Range sliders

Range sliders that each set numerical values for various display settings.

The first 3 sliders (Color, Depth, Spin) can have values from 0-999.

Slider 4 (Tint) can have a value from 0-9. If its value is 0 (default) then slider 5 is disabled.

Slider 5 (Tint%) can have a value from 0-100%. A 100% value corresponds to "99" in the mod number.

#### ➡ Mod Label

A label simply reading "Mod:"

#### ➡ Mod Input

An input displaying the editor's Mod number. The input can accept a 15 digit numerical string with a maximum value of 511999999999999. If the number that is input exceeds that value, or is longer or shorter than 15 digits, it is invalid and should default to "000000000000000".

#### ➡ Reset Mod button

Clicking the Reset Mod button resets the mod number to its initial value.

* * * * *

Preview pane (center)
=====================

The Preview pane is how the user reviews and applies the changes they make in the Editor to the Queue Items in their Queue.

The state of the Preview SVG is tied directly to the state of the Editor seed, mod, and attunement values.

💠 Preview SVG
--------------

The Preview SVG is an SVG file that is dynamically modified with the Editor.

### Set Queue Item button

The Set Queue Item button remains disabled unless the selected queue item's initial seed, mod, or attunement values are updated.

When enabled, clicking the Set Queue Item button will set the queue item's new value(s).

If the selected queue items seed, mod, and attunement values match the seed, mod, and attunement values in the Editor, then the Set Queue Item button is disabled.

* * * * *

Queue pane (right)
==================

The Queue pane is how the user prepares changes to Inscribe on the SEEDS inscriptions in their wallet.

When the user connects their wallet, the Queue is populated with a list of items representing their inscriptions, and labeled with inscription's initial seed number. Modifying the Editor's state enables the Set Queue Item button in the Preview pane, which can be clicked to "set" a Queue Item with a new seed, mod, and attunement number.

When a Queue Item is set, its label is updated to display the new seed number and the Reset Queue Item button is enabled.

💠 Queue Pagination
-------------------

Queue pagination is hidden by default, and becomes visible when the number of queue items in the queue exceeds 10 (the number of items per page).

#### ➡ Page Label

A label displaying the current page and total page count in the format: "X / Y"

#### ➡ Page Input

An input incorporated into the Page Label that can accept a numerical value from 1 to the max page count.

#### ➡ Decrement Page button

A button that decrements the page count, and becomes disabled on the first page.

#### ➡ Increment Page button

A button that increments the page count, and becomes disabled on the last page.

💠 Queue List
-------------

The queue list displays queue items.

### ➡ Queue Items

Queue items are the SEEDS inscriptions that are present in the user's connected wallet.

Queue items have seed, mod, and attunement values, a locked status (locked or null), and a unique inscriptionID identifying the ordinal.

When a queue item is selected, the Editor seed, mod and attunement values are updated to reflect the queue item's seed, mod, and attunement values.

If a queue item's seed, mod, or attunement values are edited and saved by the user with the Set Queue Item button, the queue item is considered "set".

When a set queue item is selected, instead of displaying the Queue Item's initial seed, mod, and attunement values, the Editor and Preview SVG will reflect the new seed, mod, and attunement values set by the user, awaiting inscription.

Each queue item also has a locked status, which is indicated via the Lock button.

#### ➡ Queue Item label

A label that displays the queue item's initial or new seed number.

#### ➡ Lock button

The lock button indicates the queue item's locked status.

Clicking the lock button toggles the queue item's locked status.

If the queue item's locked status differs from its initial lock status, the queue item is considered "set".

#### ➡ Reset Queue Item button

Clicking the Reset All button resets the seed, mod, and attunement numbers to their initial values.

### ➡ Inscribe button

Clicking the Inscribe button triggers the Inscribe Modal and prepares each set queue item's inscription content.

The set queue items' corresponding inscriptions will be re-inscribed with text content based on their new seed, mod, and/or attunement values.

For example, a queue item that has been set with a seed, mod, and attunement number would be re-inscribed with text that could look like "seed=7615014902 mod=245000000000000 attunement=0 lock".

SEEDS App User Experience
=========================

1.  User arrives at the SEEDS editor app

2.  User sees the Editor pane on the left, the Preview Pane in the center, and the Queue pane on the right of the page.

3.  The Queue pane shows the Inscribe button (disabled), the Preview pane shows the Preview SVG (default state), and the Editor pane shows the Basic Action buttons (Randomize and Show Layers buttons enabled, Show Display Settings button disabled).

4.  The user can either engage with the Editor immediately, or they can connect their wallet.

    1.  User engages with the editor immediately:

        1.  User changes the editor's seed number by either

            1.  Editing the Seed Number input

            2.  Clicking the Random button

            3.  Clicking the Show Layers button, revealing the Layers UI, and then toggling the Toggle Layer buttons

            4.  Clicking the Reset Seed button

        2.  Changing the editor's seed number changes the Preview SVG

        3.  When the editor's seed number is not its default value ("0"), the Display Settings button is enabled.

        4.  The user clicks the Display Settings button, revealing the Display Settings UI.

        5.  The user changes the editor's attunement value by either

            1.  Editing the Attunement Number input

            2.  Clicking the Next / Prev buttons

            3.  Clicking the Attunement Label Container to reset it

        6.  The user changes the editor's mod value by either

            1.  Editing the Mod Number input

            2.  Interacting with the buttons and sliders

            3.  Clicking the Reset Mod button

        7. The user can use Ctrl+Z and Ctrl+Y to Undo/Redo their changes to the Editor state, which is immediately reflected in the UI. Undo/Redo does not affect the Queue Items’ states.

        8. Even though the user has changed the Editor's seed, mod and attunement states, the Inscribe and Set Queue Item buttons remain disabled because there are no Queue Items.

        9. The user has explored the Editor UI but cannot do anything more because they have not connected their wallet.

    2.  The user connects their wallet

        1.  The user has SEEDS inscriptions in their wallet (identified by shared parent inscription)

        2.  Their SEEDS inscriptions appear in their Queue as Queue Items

        3.  The user selects a Queue Item, which applies its seed, mod, and/or attunement values (if any) to the editor's state.

        4.  The Set Queue Item button remains disabled because the editor's new state values match the Queue Item's state values.

        5.  With a Queue Item selected, the user engages with the editor, changing the editor's seed, mod, and/or attunement value states.

        6.  The Set Queue Item button is enabled, allowing the user to update the Queue Item's state with new seed, mod, or attunement values.

        7.  Setting a Queue Item should trigger the Queue to automatically select the next un-set Queue Item in the Queue with a seed number of "0" (if any). If none exist in the Queue, no Queue Item should be selected, but the Editor state and Artwork Preview should not be reset.

        8.  If one or more Queue Items are "set" (any of their new seed, mod, attunement, or "locked" values differ from their initial state), then the Inscribe button is enabled.

        9.  The user selects one of their "set" Queue Items and the Editor state is updated to reflect the Queue Item's new seed, mod, and/or attunement values.

        10. The Set Queue Item button is disabled until the user further makes further changes to the Queue Item's new seed, mod or attunement values.

        11. Clicking the Inscribe Button triggers the Inscribe Modal which allows them to review their transaction.