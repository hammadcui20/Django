from rest_framework import serializers

class PaperSerializer(serializers.Serializer):
    paper_title = serializers.CharField()
    year = serializers.IntegerField()
    author = serializers.CharField()
    publication = serializers.CharField()
    url_of_paper = serializers.CharField()
