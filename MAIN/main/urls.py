from django.urls import path
from .views import index, about, recommendations, error, login, feedback,register_view, login_view, logout_view
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', index, name='index'),
    path('about/', about, name='about'),
    path('recommendations/', recommendations, name='recommendations'),
    path('error/', error, name='error'),
    path('signup/', register_view, name='signup'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('feedback/', feedback, name='feedback'),  # Corrected to use the view function
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
