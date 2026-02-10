Markdown
# RESTful API Activity- [Roselyn N. Mandia]
## Best Praactices Implementation
**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
- Answer: To make the code safer and easier to change without editing the source code.
**2. Resource Modeling:**
- Why did we use plural nouns (e.g.,`/dishes`) for our routes?
- Answer:Because plural nouns represent a list or collection of data.
**3. Status Codes:**
- When do we use ` 201 Created` vs `200 OK`?
- Why is it important to return `404` instead of just an empty array or generic error?
- Answer:
`201 Created` is used when new data is added, while `200 OK` is used when a request is successful.  
`404` is important because it tells us that the data was not found.


**4. Testing:**
<img width="642" height="904" alt="image" src="https://github.com/user-attachments/assets/ce265c8b-c673-479f-b1bf-4a94ac49400b" />



Why did I choose to Embed the Tag?
I chose to embed the Tag because tags are small, simple labels (like “Emergency” or “Tax-Deductible”) that only make sense in the context of a transaction. They don’t need to exist independently or be shared across multiple documents. Embedding them keeps the schema lightweight, avoids unnecessary complexity, and makes queries faster since the tags are stored directly inside the transaction document.

Why did I choose to Reference the User?
I chose to reference the User because a user can exist independently and may be linked to many transactions. If I embedded user details inside each transaction, I would risk duplication and inconsistency whenever the user’s information changes. By referencing, I maintain a single source of truth for user data and simply link transactions to the user using their ObjectId. This makes the relationship scalable and ensures data integrity.
