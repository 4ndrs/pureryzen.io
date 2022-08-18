# Copyright (c) 2022 4ndrs <andres.degozaru@gmail.com>
# SPDX-License-Identifier: MIT
# pylint: skip-file
"""Schema definition for the GraphQL endpoint"""
import graphene


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")


schema = graphene.Schema(query=Query)
