# Setup Frontend

## Commands to setup the frontend project:

```bash
# Create a new Vite React project
npm create vite@latest frontend -- --template react

# Install required packages
npm install axios react-router-dom jwt-decode

Run this command after change somethings on your code
```bash
python manage.py makemigrations
python manage migrate


----------------------------------
Guide to Managing Database with Railway in Django Project

## 1. Create a .env File

Create a .env file in the root directory of your project (where manage.py is located).

The content of the .env file:

DB_NAME=railway
DB_USER=postgres
DB_PASSWORD=kLljGsDKWGfqLKvmTvrGYnbFntNHvXuc
DB_HOST=shortline.proxy.rlwy.net
DB_PORT=21148

## 2. Install python-decouple

Run the following command to install the library that helps read environment variables from .env:

pip install python-decouple

## 3. Modify settings.py

Add the following import at the top of the file:

from decouple import config

Update the database configuration section:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT'),
    }
}

## 4. Usage

Run migrations to create tables:

python manage.py migrate

Create a superuser if needed:

python manage.py createsuperuser

Run the server:

python manage.py runserver


