from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.db import connection

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        self.stdout.write(self.style.WARNING('Deleting old data...'))
        for obj in Leaderboard.objects.all():
            if obj.pk:
                obj.delete()
        for obj in Activity.objects.all():
            if obj.pk:
                obj.delete()
        for obj in User.objects.all():
            if obj.pk:
                obj.delete()
        for obj in Team.objects.all():
            if obj.pk:
                obj.delete()
        for obj in Workout.objects.all():
            if obj.pk:
                obj.delete()

        self.stdout.write(self.style.SUCCESS('Creating teams...'))
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        self.stdout.write(self.style.SUCCESS('Creating users...'))
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman2@dc.com', team=dc),
        ]

        self.stdout.write(self.style.SUCCESS('Creating activities...'))
        Activity.objects.create(user=users[0], type='swing', duration=30, date='2024-01-01')
        Activity.objects.create(user=users[1], type='fly', duration=45, date='2024-01-02')
        Activity.objects.create(user=users[2], type='fight', duration=60, date='2024-01-03')
        Activity.objects.create(user=users[3], type='detective work', duration=90, date='2024-01-04')

        self.stdout.write(self.style.SUCCESS('Creating workouts...'))
        Workout.objects.create(name='Super Strength', description='Lift heavy objects', suggested_for='Marvel')
        Workout.objects.create(name='Stealth Training', description='Move unseen', suggested_for='DC')

        self.stdout.write(self.style.SUCCESS('Creating leaderboard...'))
        Leaderboard.objects.create(user=users[0], score=100)
        Leaderboard.objects.create(user=users[1], score=90)
        Leaderboard.objects.create(user=users[2], score=95)
        Leaderboard.objects.create(user=users[3], score=85)


        self.stdout.write(self.style.SUCCESS('Ensuring unique index on user email...'))
        from pymongo import MongoClient
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        db.users.create_index([('email', 1)], unique=True)

        self.stdout.write(self.style.SUCCESS('Database populated with test data!'))
