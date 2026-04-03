# is120-hw11-Spencer-Kimball
IS 120 Homework 11

In your README.md include the following:

**Why is it important that we only make one API call for this page? How does that affect you as a frontend developer and how does that affect the API developers?**

Making only 1 API call limits me as the frontend developer since this specific API only returned the first 10 characters that were listed as characters, and even if you changed the indeces, it would only return a max of 10. This limit doesn't make as much sense since it was still only 1 API call. However, it makes sense that we should only do 1 API call at a time so that their systems aren't overloaded. 

**Why is local storage useful in this scenario? Can you think of other instances where it would be useful?**

Local storage is useful because if you only have a certain number of API calls that you are allowed, then you can make the 1 API call and then store the information in local storage so you don't have to make more calls to the API.

Local storage would be useful for someone's cart (i.e. amazon or walmart) where they are not logged into an account yet, but they are still on the guest mode. That they could come back to the website without signing in and all of the items they had added to their cart could be saved.

**What would break if a user's favorites referenced an item the API no longer returns? How could you fix that?**

Currently I have the favorites stored as local storage so if the referenced item dissapeared from their website's information it would still show up on my page until the local storage was wiped or it was unselected from the favorites list. At that point refreshing the page would remove it from the general section since only the favorites are stored in local storage.

