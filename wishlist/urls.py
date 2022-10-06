from django.urls import path
from wishlist.views import login_user, logout_user, post_wishlist_ajax, register, show_data_xml, show_json_by_id, show_wishlist, show_data_json, show_wishlist_ajax, show_xml_by_id

app_name = 'wishlist'

urlpatterns = [
    path('', show_wishlist, name='show_wishlist'),
    path('ajax/', show_wishlist_ajax, name='show_wishlist_ajax'),
    path('ajax/post/', post_wishlist_ajax, name='post_wishlist_ajax'),
    path('xml/', show_data_xml, name='show_data_xml'),
    path('json/', show_data_json, name='show_data_json'),
    path('xml/<int:id>', show_xml_by_id, name='show_xml_by_id'),
    path('json/<int:id>', show_json_by_id, name='show_json_by_id'),
    path('register/', register, name='register'),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
]