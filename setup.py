from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in uerp/__init__.py
from uerp import __version__ as version

setup(
	name="uerp",
	version=version,
	description="uerp",
	author="Shahzad Naser",
	author_email="shahzadnaser1122@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
