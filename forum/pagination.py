from collections import OrderedDict
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class MyPageNumberPagination(PageNumberPagination):
    page_query_param = 'page'

    def get_paginated_response(self, data, extra):
        default = [
            ('pages', self.page.paginator.num_pages),
            ('has_next', self.page.has_next()),
            ('has_previous', self.page.has_previous()),
            ('results', data),
            ('current_page', self.page.number)
        ]

        return Response(OrderedDict(
            default + [(field[0], field[1]) for field in extra]
        ))


class LargeResultsSetPagination(MyPageNumberPagination):
    page_size = 30


class SmallResultsSetPagination(MyPageNumberPagination):
    page_size = 2

