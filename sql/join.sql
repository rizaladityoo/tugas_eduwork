select * 
from users 
left join categories on users.id = categories.user_id
left join products on categories.user_id = products.categories_id