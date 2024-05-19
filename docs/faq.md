---
sidebar_position: 2
slug: /faq
---

# Frequently Asked Questions (FAQ)

**Enterprise Lens FAQ\*** Copyright 2018-2023 Enterprise Lens Pty Ltd

Published by Enterprise Lens Pty Ltd All other copyrights and trademarks are the property of their respective owners

Published: 2023 Document Version: 3.1.x



**Disclaimer**

The information in this document remains the current view of Enterprise Lens Pty Ltd and is subject to change without notice. This position is due to changing market conditions and should not be interpreted as a commitment to the correct operation of any technology or product contained herein.

This document is intended as information only and Enterprise Lens Pty Ltd makes no warranties, express or implied as to the information in this document.

All Rights Reserved.

The copyright of this document and the computer software described herein and provided herewith are the property of Enterprise Lens Pty Ltd. No part of this publication or the computer software may be reproduced, transmitted, transcribed, stored in a retrieval system, or translated into any human or computer language, in any form or by any means or otherwise used without the express written permission of Enterprise Lens Pty Ltd.



## Overview

We have created these quick links to the training videos - a click on a link will open the Video at the corrent place for viewing.  They are designed to support your Enterprise Lens education and learning practices.

`<coming soon>`


## Tips and Tricks

### 1. Layout, Layout, Layout

:::danger

Did I get your attention? Great!

If you are an Enterprise Lens Illustrator then think about how you would like to lay out your illustration. The Layout Engine within Enterprise Lens is incredibly powerful but some time up front could save **a lot of time** at the other end.

:::

### 2. Google Bookmarks
If there is an Illustration that you use on a regular basis then add it to Google bookmarks by clicking the `star` at the end of the URL.

:::tip 
You can share a Google Bookmark and provide an easy way for you and others to open straight to an illustration without having to navigate the Enterprise Lens directory structure. (Assume the person you send it to has access to the directory)
:::

### 3. PowerPoint
You can embed a URL to a PowerPoint into any Illustration and open it at the click of a button

### 4. Case Sensitive 
Everything in Enterprise Lens is case sensitive - usernames, passwords, lens lookup values, data attributes etc.

### 5. Zoom:

As most Illustration are reasonably detailed, we strongly recommend setting your browser zoom setting to ``75%``.

### 6. Ordering
You can order just about everything within Enterprise Lens. You can set order values for most things within Enterprise Lens and even though a Lens or Association or Style Guide entry may not be close internally - visually they are ordered when you go to view-mode.

### 7. Naming 
Try and use clear names for your Illustration.  
You may have many Lenses, Box Types and Associations and having clear names will be useful later when presenting your Illustration.

### 8 Associations 
Do these towards the end - creating associations is quite simple and can be done a number of ways, with the most commonly used being Attribute Value Lookup and Attribute Reverse Value Lookup.  These only take a minute or so to create so spending time on Tip 1 is really important.

:::info
When you create a new association (other than "Default Association"), you should delete the Render Function as it `Set Box Property from Attribute` and allow default "DefaultAssociation" to set the association color.
:::

### 9. Multiple Monitors  
Where possible, use two monitors when developing an Illustration as you can login into the Illustration on one monitor and login to the same Illustration on the other monitor and use it for reference. 

Where possible, leverage the default Illustration.  It will only continue to get more feature rich, designed to save you time and effort.

:::tip
If doing a new version of an Illustration, have the current Illustration on one monitor and the new version of the Illustration on the other monitor
:::


### 10. Stories  
Create these last as Stories save the state of the Illustration, especially new boxes.  If you add boxes between stories then they will not display in an earlier story and you will need to use the BOXES left hand menu to enable them.

### 11. Style Guide
Augment your Style Guide to have the colors and palette of the company you are presenting too.

1. Company Logo 
    - It is always nice to use the logo of the company you are presenting too.  As Enterprise Lens is a SaaS tool you cannot simply paste an image. However you can reference one.  
    - If you navigate to your customers website and hit the F12 key, you will be able to locate their company logo for reference.
2. Create your own Style Guide(s) 
    - For use with different client or different industries and have the naming convention to suit
3. Contemporary Colours 
    - When designing your Illustration, it is recommended that you use a subtle background colour and lighter foreground colors.

- Scroll to the bottom of Styles in Edit Box Form - for commonly used ones.

:::tip[Colour]
There are many tools out there than can assist with colors. These are two that are often used: [Eva Design system](https://colors.eva.design/) and [Material Palette](https://www.materialpalette.com/colors) One of the best tools we have found during the creation of Enterprise Lens and colour matching is Snagit by [TechSmith](https://www.techsmith.com)
:::

### 12. Filters 
When creating a Box Type for filters - we suggest you make each Filter their own Box Type. 

:::note 
For instance, If you have two Filters e.g Risk (with values `High`, `Medium` and `Low`) and Change Readiness (with values `High`, `Medium` and `Low`). If these filter belong to the same Box Type then (if using an attribute value association) when you highlight `Low` both `Low` (for Risk) and `Low` (for Change) will highlight.
:::

### 13. Badge Numbers 
:::warning
The order of the Badge numbers is important. Particularly with `Set Box Badge xx Property`.  
:::

A higher badge number acts like a "bring to front". i.e. if you have two badges that display a colour within a Box. The higher badge number will "sit on top" of the lower badge number.


### 14. PowerLenses 
The parent Box Type and the Child Box Type must be different in a PowerLens, else the PowerLens will hide the entire Box Type when you turn it on.

### 15. JSON Tools 
There are many good JSON tools in the market. 
If you need some assistance in editing JSON [Visual Studio Code](https://code.visualstudio.com) or finding the missing comma etc - this one maybe useful [JSON Beautifier](https://codebeautify.org/jsonviewer).


### 15. Import/Export 

1. Lenses  
    - Consider adding lenses before exporting.  
    - If you have several Choice Lenses (ones with a lookup) then when you export these to Excel they will pass through as Excel in-cell drop downs and could be really useful assisting people populating the Illustration during a discovery phase.
2. Import Excel
    - This brings in new columns (but not new rows of data)
3. Import Excel (Canvases) 
    - Brings in new columns (but not new rows of data)
4. Import Child Boxes 
    - Brings in both new Row and New Column data

:::tip

All Associations are `DATA DRIVEN` you can export these Asscociations to Excel, amend/change these import them back.

:::

### 15. Illustration Design  
- When designing an Illustration or dragging parts around, it can be extremely useful to amend the Configuration parameters in the right hand menu. Illustration Width/Height and View and Edit mode spacing
- The Multi edit tool on the top header menu can select some, part of all of an illustration, allowing you to make mass changes at a single time. 
    - This feature also has three modes: 
    - LEFT-Click selects all children
    - CTRL-Click selects the Parent
    - SHIFT-Click selects the parents children.

### 16. Microsoft Teams 
Enterprise Lens can be used in its current form inside a Microsoft Teams tab. 
- You can use the main url https://www.myenterpriselens.com or you can use the URL of the Illustration that you would like to share.

### 17. Microsoft Excel
There are several handy Excel formulas that make for an easier life. These have been documented in the Admin document.

### 18. Performance and Saves
Enterprise does the majority of the processing on the client side.  If performance is sluggish, look to see if there are any rogue processes running.

1. Remember to save your Illustration on a regular basis as it is a SaaS solution and closing your browser will close your Illustration.
    -  You can use the Import/Export function to copy your Illustration code to the Downloads directory.
2. You don't need to have your PC to demo the software.  As Enterprise Lens is a true SaaS solution,  you simply need access to the internet.

### 19. Associations

Here's the simple rundown!

| **Type**                      | **Description**                                                                                                                                                                                                                             |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Single                        | If it's a single FROM value looking up a list then use a Attribute Values Reverse lookup (and it's going to look at any value in the target type looking for the value that you've got).                                                    |
| Multiple                      | If there are multiple FROM values then use a normal Attribute Values lookup and point it at the single value you want to match it with                                                                                                      |
| Box UUIDs                     | Looks up the name of the Box you are joining to (you provide the attribute or convert a Lens. If more than 1 name then comma separate them)                                                                                                 |
| Box Reverse Lookup UUIDs      | Looks at the Box Name you have moused over and Joins it to ANY attribute from Permitted Box Type with the same name                                                                                                                         |
| Name Lookup                   | Looks up the name of the Box you are joining to (you provide the attribute or convert a Lens. If more than 1 name then comma separate them)                                                                                                 |
| Name Reverse Lookup           | Looks at the Box Name you have moused over and Joins it to ANY attribute from Permitted Box Type with the same name                                                                                                                         |
| Attribute Lookup              | Looks up the Attribute Value you want to join to (you provide the attribute name or convert a Lens. If more than 1 name then comma separate them)                                                                                           |
| Attribute Reverse Lookup      | If you use Attribute Values Lookup for an association that Joins A To B, then it is extremely likely that you will use attribute values reverse lookup that Joins the same Boxes from B To A. Same goes for Names and Names Reverse Lookup. |
| Attribute Values Lookup       |                                                                                                                                                                                                                                             |
| Default Association Attribute | Show many joins example and how the Association style is standard. You change it in a single place                                                                                                                                          |
:::tip
Did you know that you can convert a Lense straight to an Association
:::

### 20. Layout, Layout Layout
There's a reason we're mentioning it twice!


